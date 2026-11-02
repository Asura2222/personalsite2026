import { skillGroups } from "@/lib/skills";

export function SkillsTools() {
  return (
    <section className="pv-skills" aria-labelledby="skills-title">
      <h2 id="skills-title">
        Skills & tools<span className="pv-period">.</span>
      </h2>
      <dl>
        {skillGroups.map((group) => (
          <div key={group.title}>
            <dt>{group.title}</dt>
            <dd>
              <p>{group.description}</p>
              <span>{group.tools}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
