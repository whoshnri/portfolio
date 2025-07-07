// utils/fetchLeetcodeStats.ts
export async function fetchLeetCodeStats(username: string) {
  const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${whoshnri}`);
  if (!res.ok) throw new Error("Failed to fetch LeetCode stats");
  return res.json();
}
