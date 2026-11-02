import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const query = `query {
  user(login: "Asura2222") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel weekday } }
      }
    }
  }
  search(query: "repo:TalentOSOfficial/talentos-team author:Asura2222 is:pr is:merged", type: ISSUE, first: 1) { issueCount }
}`;
const response = JSON.parse(
  execFileSync("gh", ["api", "graphql", "-f", `query=${query}`], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }),
);
if (response.errors?.length)
  throw new Error("GitHub did not return a complete activity response.");
const calendar =
  response.data.user.contributionsCollection.contributionCalendar;
const levels = [
  "NONE",
  "FIRST_QUARTILE",
  "SECOND_QUARTILE",
  "THIRD_QUARTILE",
  "FOURTH_QUARTILE",
];
const days = calendar.weeks.flatMap((week) =>
  week.contributionDays.map((day) => ({
    date: day.date,
    count: day.contributionCount,
    level: levels.indexOf(day.contributionLevel),
    weekday: day.weekday,
  })),
);
const snapshot = {
  username: "Asura2222",
  syncedAt: new Date().toISOString(),
  publicContributions: calendar.totalContributions,
  mergedTalentOSPullRequests: response.data.search.issueCount,
  days,
};
if (
  days.length < 350 ||
  days.some((day) => day.level < 0 || !Number.isInteger(day.count)) ||
  !Number.isInteger(snapshot.mergedTalentOSPullRequests)
)
  throw new Error("GitHub returned an unexpected activity format.");
const directory = fileURLToPath(
  new URL("../content/activity/", import.meta.url),
);
mkdirSync(directory, { recursive: true });
writeFileSync(
  `${directory}github.json`,
  `${JSON.stringify(snapshot, null, 2)}\n`,
);
console.log(
  `Synced ${snapshot.publicContributions} calendar contributions and ${snapshot.mergedTalentOSPullRequests} merged TalentOS PRs. Only aggregate counts were saved.`,
);
