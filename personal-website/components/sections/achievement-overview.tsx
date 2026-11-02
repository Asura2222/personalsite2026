import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import activity from "@/content/activity/github.json";
import profileProof from "@/content/activity/profile-proof.json";
import githubCalendar from "@/public/evidence/github-calendar-2026-11-01.png";

const snapshotDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Los_Angeles",
});

export function AchievementOverview() {
  const recordedDate = snapshotDateFormatter.format(
    new Date(activity.syncedAt),
  );

  return (
    <section className="pv-achievements" aria-labelledby="achievements-title">
      <div className="pv-achievement-heading">
        <h2 id="achievements-title">A few numbers behind the work.</h2>
        <span>Building · Distribution · Community</span>
      </div>
      <div className="pv-achievement-columns">
        <section className="pv-github" aria-labelledby="github-title">
          <div className="pv-github-heading">
            <h3 id="github-title">
              <Github size={17} aria-hidden="true" /> Building in code
            </h3>
            <a href="https://github.com/Asura2222">
              @Asura2222 <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="pv-github-total">
            <strong>
              {profileProof.contributions.toLocaleString("en-US")}
            </strong>
            <span>
              GitHub contributions
              <br />
              <small>In the last year · profile snapshot</small>
            </span>
          </div>
          <figure className="pv-contribution-figure">
            <Image
              src={githubCalendar}
              unoptimized
              className="pv-github-snapshot"
              alt="James Win's GitHub contribution calendar, including private activity, recorded November 1, 2026."
            />
            <figcaption>
              <span>Actual GitHub calendar · Nov 1, 2026</span>
              <a href="https://github.com/Asura2222">
                View GitHub <ArrowUpRight size={11} />
              </a>
            </figcaption>
          </figure>
          <p className="pv-data-note">
            <strong>
              {activity.mergedTalentOSPullRequests.toLocaleString("en-US")}{" "}
              merged PRs in TalentOS
            </strong>{" "}
            · All time, synced {recordedDate}. Calendar shown from my profile
            snapshot, including private activity.
          </p>
        </section>
        <section className="pv-audience" aria-labelledby="audience-title">
          <h3 id="audience-title">Building an audience</h3>
          <div className="pv-platforms">
            <Link href="/work/build-myanmar">
              <strong>230K+</strong>
              <span>
                Facebook followers <ArrowUpRight size={12} />
              </span>
            </Link>
            <Link href="/work/build-myanmar">
              <strong>140K+</strong>
              <span>
                TikTok followers <ArrowUpRight size={12} />
              </span>
            </Link>
            <Link href="/work/build-myanmar">
              <strong>91K+</strong>
              <span>
                YouTube subscribers <ArrowUpRight size={12} />
              </span>
            </Link>
          </div>
          <div className="pv-community-milestone">
            <Link href="/work/build-myanmar#community-spaces">
              <strong>5,000+</strong> community members
            </Link>
            <span>·</span>
            <Link href="/work/build-myanmar#community-spaces">
              <strong>2</strong> physical spaces
            </Link>
          </div>
          <p className="pv-data-note">
            Recorded audience milestones. YouTube updated to 91K+ in November
            2026; Facebook and TikTok reflect earlier milestones.
          </p>
        </section>
      </div>
    </section>
  );
}
