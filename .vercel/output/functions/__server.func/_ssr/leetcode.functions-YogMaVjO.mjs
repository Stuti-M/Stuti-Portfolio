import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./server-CHcqrqs1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leetcode.functions-YogMaVjO.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var QUERY = `
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
function pick(rows, diff) {
	return rows?.find((r) => r.difficulty === diff)?.count ?? 0;
}
async function fetchFromLeetCode(username) {
	const res = await fetch("https://leetcode.com/graphql", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"user-agent": "Mozilla/5.0 (portfolio-leetcode-fallback)",
			referer: `https://leetcode.com/u/${username}/`
		},
		body: JSON.stringify({
			query: QUERY,
			variables: { username }
		})
	});
	if (!res.ok) throw new Error(`leetcode graphql ${res.status}`);
	const json = await res.json();
	const user = json.data?.matchedUser;
	if (!user) throw new Error("user not found");
	const all = json.data?.allQuestionsCount ?? [];
	const ac = user.submitStats?.acSubmissionNum ?? [];
	const tot = user.submitStats?.totalSubmissionNum ?? [];
	const totalAcAll = pick(ac, "All");
	const totalSubAll = tot.find((r) => r.difficulty === "All");
	const acceptanceRate = totalSubAll && totalSubAll.submissions ? totalAcAll / totalSubAll.submissions * 100 : void 0;
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
		acceptanceRate
	};
}
async function fetchFromProxy(username) {
	const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
	if (!res.ok) throw new Error(`proxy ${res.status}`);
	const d = await res.json();
	if (d.status && d.status !== "success") throw new Error(d.message ?? "proxy no data");
	return d;
}
var getLeetCodeStats_createServerFn_handler = createServerRpc({
	id: "d9d4df982eacc651d4fd322a35cfb20f4d7ad42c68b02708f8c5e881c272db91",
	name: "getLeetCodeStats",
	filename: "src/lib/leetcode.functions.ts"
}, (opts) => getLeetCodeStats.__executeServer(opts));
var getLeetCodeStats = createServerFn({ method: "GET" }).inputValidator((input) => {
	if (!input?.username || typeof input.username !== "string") throw new Error("username required");
	return { username: input.username.trim() };
}).handler(getLeetCodeStats_createServerFn_handler, async ({ data }) => {
	try {
		return await fetchFromLeetCode(data.username);
	} catch {
		return await fetchFromProxy(data.username);
	}
});
//#endregion
export { getLeetCodeStats_createServerFn_handler };
