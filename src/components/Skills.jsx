import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Skills</h2>
      <div className="grid">
        {skills.map((s) => (
          <div className="card skill-card" key={s.group}>
            <h3>{s.group}</h3>
            <ul className="tags">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}