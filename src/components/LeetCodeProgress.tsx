import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ExternalLink, Loader2 } from "lucide-react";

type Stats = {
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

async function fetchLeetCode(username: string): Promise<Stats> {
  // Public unofficial proxy — mirrors LeetCode's GraphQL. If it fails, we fall back.
  const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
  if (!res.ok) throw new Error("stats unreachable");
  const d = await res.json();
  if (d.status !== "success") throw new Error(d.message ?? "no data");
  return d;
}

export function LeetCodeProgress({ username }: { username: string }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["leetcode", username],
    queryFn: () => fetchLeetCode(username),
    refetchInterval: 60_000,
    retry: 1,
  });

  const fallback: Stats = {
    totalSolved: 0, totalQuestions: 3400,
    easySolved: 0, totalEasy: 850,
    mediumSolved: 0, totalMedium: 1800,
    hardSolved: 0, totalHard: 750,
  };
  const s = data ?? fallback;

  const rows = [
    { label: "Easy",   solved: s.easySolved,   total: s.totalEasy,   color: "#00b8a3" },
    { label: "Medium", solved: s.mediumSolved, total: s.totalMedium, color: "#ffb800" },
    { label: "Hard",   solved: s.hardSolved,   total: s.totalHard,   color: "#ff375f" },
  ];
  const pieData = rows.map(r => ({ name: r.label, value: r.solved, color: r.color }));
  const hasSolved = s.totalSolved > 0;

  return (
    <div className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur">
      <div className="flex items-start justify-between mb-6 flex-wrap gap-2">
        <div>
          <h2 className="font-display text-xl font-bold flex items-center gap-2">
            LeetCode Progress
            {isLoading && <Loader2 className="h-4 w-4 animate-spin text-hero" />}
            <span className="ml-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-normal text-muted-foreground">live</span>
          </h2>
          <p className="text-xs text-muted-foreground mt-1">Refreshes every 60s</p>
        </div>
        <a href={`https://leetcode.com/u/${username}/`} target="_blank" rel="noreferrer"
           className="text-sm text-hero hover:underline flex items-center gap-1">
          @{username} <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {isError && (
        <div className="mb-4 rounded-md border border-yellow-500/40 bg-yellow-500/10 p-3 text-xs text-yellow-600 dark:text-yellow-400">
          Couldn't reach LeetCode's stats API right now. Showing placeholder values.
        </div>
      )}

      <div className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
        <div className="relative h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={hasSolved ? pieData : [{ name: "—", value: 1, color: "hsl(var(--muted))" }]}
                cx="50%" cy="50%" innerRadius={65} outerRadius={90}
                paddingAngle={hasSolved ? 3 : 0} dataKey="value" stroke="none"
              >
                {(hasSolved ? pieData : [{ color: "#64748b" }]).map((e, i) => (
                  <Cell key={i} fill={e.color} />
                ))}
              </Pie>
              {hasSolved && <Tooltip
                contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }}
              />}
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="font-display text-3xl font-black">{s.totalSolved}</p>
            <p className="text-xs text-muted-foreground">/ {s.totalQuestions} solved</p>
          </div>
        </div>

        <div className="space-y-4">
          {rows.map(r => {
            const pct = r.total ? Math.min(100, (r.solved / r.total) * 100) : 0;
            return (
              <div key={r.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold" style={{ color: r.color }}>{r.label}</span>
                  <span className="text-muted-foreground tabular-nums">
                    {r.solved} / {r.total}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000"
                       style={{ width: `${pct}%`, background: r.color }} />
                </div>
              </div>
            );
          })}
          {typeof s.ranking === "number" && s.ranking > 0 && (
            <div className="pt-2 flex gap-6 text-sm">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Rank</p>
                <p className="font-display text-lg font-bold text-hero">#{s.ranking.toLocaleString()}</p>
              </div>
              {typeof s.acceptanceRate === "number" && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Acceptance</p>
                  <p className="font-display text-lg font-bold text-hero">{s.acceptanceRate.toFixed(1)}%</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
