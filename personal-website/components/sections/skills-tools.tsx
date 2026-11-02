export function SkillsTools() {
  return (
    <section className="pv-skills" aria-labelledby="skills-title">
      <h2 id="skills-title">
        Skills & tools<span className="pv-period">.</span>
      </h2>
      <dl>
        <div>
          <dt>AI engineering</dt>
          <dd>
            <p>Agent orchestration, harness engineering, MCP & tool use</p>
            <span>Claude Code · Codex · OpenCode · Conductor</span>
          </dd>
        </div>
        <div>
          <dt>Product engineering</dt>
          <dd>
            <p>Full-stack development, product design & execution</p>
            <span>TypeScript · React · Next.js · Convex · Tailwind CSS</span>
          </dd>
        </div>
        <div>
          <dt>Marketing & creative</dt>
          <dd>
            <p>Audience growth, content strategy & community operations</p>
            <span>Storytelling · Video production & editing with agents</span>
          </dd>
        </div>
      </dl>
    </section>
  );
}
