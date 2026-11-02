import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function IntroAchievements() {
  return (
    <div className="pv-achievement-timeline">
      <section className="pv-track" aria-labelledby="talentos-track">
        <div className="pv-track-heading">
          <h2 id="talentos-track">
            <a href="https://talentos.so/">
              TalentOS <span className="pv-track-site-label">Website</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <span>Building the future of work</span>
          </h2>
          <time>2025 — Present</time>
        </div>
        <ul>
          <li>
            <mark className="pv-mark pv-mark-purple">$120K raised</mark>, with
            angels from Google, Meta, Samsung, and AGI House.
          </li>
          <li>
            Built and grew our first AI career product to{" "}
            <mark className="pv-mark pv-mark-purple">15,000 users</mark> and{" "}
            <mark className="pv-mark pv-mark-purple">$200K ARR</mark>.
          </li>
          <li>
            Now building a multiplayer AI workspace where people and their
            agents work together.
          </li>
        </ul>
        <Link
          className="pv-track-details"
          href="/work/talentos"
          aria-label="About the TalentOS project"
        >
          About the project <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </section>
      <section className="pv-track" aria-labelledby="frontier-track">
        <div className="pv-track-heading">
          <h2 id="frontier-track">
            <a href="https://frontiertower.io/">
              Frontier Tower{" "}
              <span className="pv-track-site-label">Website</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <span>Human Flourishing Floor · Co-lead</span>
          </h2>
          <time>2025 — 2026</time>
        </div>
        <ul>
          <li>
            Co-led the floor and helped grow membership from{" "}
            <mark className="pv-mark pv-mark-blue">120</mark> to{" "}
            <mark className="pv-mark pv-mark-blue">600+</mark>.
          </li>
          <li>
            Hosted conversations on AI alignment and regenerative economics with
            leaders from OpenAI, Anthropic, and Burning Man.
          </li>
        </ul>
        <Link
          className="pv-track-details"
          href="/work/frontier-tower"
          aria-label="About my work at Frontier Tower"
        >
          About my work <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </section>
      <section className="pv-track" aria-labelledby="myanmar-track">
        <div className="pv-track-heading">
          <h2 id="myanmar-track">
            <a href="https://www.buildmyanmarmedia.com/">
              Build Myanmar <span className="pv-track-site-label">Website</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <span>Technology, media & community</span>
          </h2>
          <time>2023 — 2025</time>
        </div>
        <ul>
          <li>
            Grew the organization into a{" "}
            <mark className="pv-mark pv-mark-green">team of 30</mark>.
          </li>
          <li>
            Built our media channels to{" "}
            <mark className="pv-mark pv-mark-green">450K+ followers</mark>{" "}
            across Facebook, TikTok, and YouTube.
          </li>
          <li>
            Opened{" "}
            <mark className="pv-mark pv-mark-green">two physical spaces</mark>{" "}
            for a community of{" "}
            <mark className="pv-mark pv-mark-green">5,000+ builders</mark>.
          </li>
        </ul>
        <Link
          className="pv-track-details"
          href="/work/build-myanmar-media"
          aria-label="About the Build Myanmar project"
        >
          About the project <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </section>
      <section className="pv-track" aria-labelledby="book-track">
        <div className="pv-track-heading">
          <h2 id="book-track">
            <a href="https://www.amazon.com/How-Become-Glitch-369-Labs/dp/B0CR9GNDJN">
              How to Become a Glitch{" "}
              <span className="pv-track-site-label">Amazon</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <span>Author · The Glitch Network</span>
          </h2>
          <time>2023</time>
        </div>
        <ul>
          <li>
            Authored an interactive book with{" "}
            <a href="https://www.amazon.com/How-Become-Glitch-369-Labs/dp/B0CR9GNDJN">
              <mark className="pv-mark pv-mark-yellow">
                five-star reader reviews on Amazon
              </mark>
              .<ArrowUpRight size={13} />
            </a>
          </li>
        </ul>
        <Link
          className="pv-track-details"
          href="/work/the-glitch-network"
          aria-label="About How to Become a Glitch"
        >
          About the book <ArrowRight size={13} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
