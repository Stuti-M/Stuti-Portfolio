import { createServerFn } from "@tanstack/react-start";

export type LeetCodeStats = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking?: number;
  acceptanceRate?: number;
};

const QUERY = `
  query userStats($username: String!) {
    allQuestionsCount { difficulty count }
    matchedUser(username: $username) {
      profile { ranking }
      submitStats {
        acSubmissionNum { difficulty count }
        totalSubmissionNum { difficulty count submissions }
      }
    }
  }
`;

type CountRow = { difficulty: string; count: number; submissions?: number };

function pick(rows: CountRow[] | undefined, diff: string): number {
  return rows?.find((r) => r.difficulty === diff)?.count ?? 0;
}

async function fetchFromLeetCode(username: string): Promise<LeetCodeStats> {
  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "user-agent": "Mozilla/5.0 (portfolio-leetcode-fallback)",
      referer: `https://leetcode.com/u/${username}/`,
    },
    body: JSON.stringify({ query: QUERY, variables: { username } }),
  });
  if (!res.ok) throw new Error(`leetcode graphql ${res.status}`);
  const json = (await res.json()) as {
    data?: {
      allQuestionsCount?: CountRow[];
      matchedUser?: {
        profile?: { ranking?: number };
        submitStats?: {
          acSubmissionNum?: CountRow[];
          totalSubmissionNum?: CountRow[];
        };
      } | null;
    };
    errors?: unknown;
  };
  const user = json.data?.matchedUser;
  if (!user) throw new Error("user not found");

  const all = json.data?.allQuestionsCount ?? [];
  const ac = user.submitStats?.acSubmissionNum ?? [];
  const tot = user.submitStats?.totalSubmissionNum ?? [];

  const totalAcAll = pick(ac, "All");
  const totalSubAll = tot.find((r) => r.difficulty === "All");
  const acceptanceRate =
    totalSubAll && totalSubAll.submissions
      ? (totalAcAll / totalSubAll.submissions) * 100
      : undefined;

  return {
    totalSolved: totalAcAll,
    totalQuestions: pick(all, "All"),
    easySolved: pick(ac, "Easy"),
    totalEasy: pick(all, "Easy"),
    mediumSolved: pick(ac, "Medium"),
    totalMedium: pick(all, "Medium"),
    hardSolved: pick(ac, "Hard"),
    totalHard: pick(all, "Hard"),
    ranking: user.profile?.ranking,
    acceptanceRate,
  };
}

async function fetchFromProxy(username: string): Promise<LeetCodeStats> {
  const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
  if (!res.ok) throw new Error(`proxy ${res.status}`);
  const d = (await res.json()) as LeetCodeStats & { status?: string; message?: string };
  if (d.status && d.status !== "success") throw new Error(d.message ?? "proxy no data");
  return d;
}

export const getLeetCodeStats = createServerFn({ method: "GET" })
  .inputValidator((input: { username: string }) => {
    if (!input?.username || typeof input.username !== "string") {
      throw new Error("username required");
    }
    return { username: input.username.trim() };
  })
  .handler(async ({ data }) => {
    try {
      return await fetchFromLeetCode(data.username);
    } catch {
      // Fall back to community proxy if GraphQL is blocked / rate-limited.
      return await fetchFromProxy(data.username);
    }
  });
