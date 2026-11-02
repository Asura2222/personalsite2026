import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IntroAchievements() {
  return (
    <div className="pv-achievement-timeline">
      <section className="pv-track" aria-labelledby="talentos-track">
        <div className="pv-track-heading">
          <h2 id="talentos-track">
            <Link href="/work/talentos">
              TalentOS <ArrowUpRight size={15} />
            </Link>
            <span>Building the future of work</span>
          </h2>
          <time>2025 — 2026</time>
        </div>
        <ul>
          <li>
            <mark className="pv-mark pv-mark-purple">$120K raised</mark>, with
            angels from Google, Meta, Samsung, and AGI House.
          </li>
          <li>
            <Link href="/work/ai-career-product">
              Built and grew our first AI career product to{" "}
              <mark className="pv-mark pv-mark-purple">15,000 users</mark> and{" "}
              <mark className="pv-mark pv-mark-purple">$200K ARR</mark>.
              <ArrowUpRight size={13} />
            </Link>
          </li>
          <li>
            <Link href="/work/talentos">
              Now building a multiplayer AI workspace where people and their
              agents work together.
              <ArrowUpRight size={13} />
            </Link>
          </li>
        </ul>
      </section>
      <section className="pv-track" aria-labelledby="frontier-track">
        <div className="pv-track-heading">
          <h2 id="frontier-track">
            <Link href="/work/frontier-tower">
              Frontier Tower <ArrowUpRight size={15} />
            </Link>
            <span>Human Flourishing Floor · Co-lead</span>
          </h2>
          <time>From Sep 2025</time>
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
      </section>
      <section className="pv-track" aria-labelledby="myanmar-track">
        <div className="pv-track-heading">
          <h2 id="myanmar-track">
            <Link href="/work/build-myanmar-media">
              Build Myanmar <ArrowUpRight size={15} />
            </Link>
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
            <Link href="/work/build-myanmar-media">
              Built our media channels to{" "}
              <mark className="pv-mark pv-mark-green">450K+ followers</mark>{" "}
              across Facebook, TikTok, and YouTube.
              <ArrowUpRight size={13} />
            </Link>
          </li>
          <li>
            <Link href="/work/build-myanmar-spaces">
              Opened{" "}
              <mark className="pv-mark pv-mark-green">two physical spaces</mark>{" "}
              for a community of{" "}
              <mark className="pv-mark pv-mark-green">5,000+ builders</mark>.
              <ArrowUpRight size={13} />
            </Link>
          </li>
        </ul>
      </section>
      <section className="pv-track" aria-labelledby="book-track">
        <div className="pv-track-heading">
          <h2 id="book-track">
            <Link href="/work/the-glitch-network">
              How to Become a Glitch <ArrowUpRight size={15} />
            </Link>
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
      </section>
    </div>
  );
}
