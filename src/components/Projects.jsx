import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            {p.image ? (
              <img
                className="card-img"
                src={`${import.meta.env.BASE_URL}${p.image}`}
                alt={`${p.title} screenshot`}
              />
            ) : (
              <div className="card-img placeholder">{p.title.charAt(0)}</div>
            )}
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="card-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">Live demo</a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">Source code</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}