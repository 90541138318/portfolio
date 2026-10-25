import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="section container narrow">
      <h2 className="section-title">About me</h2>
      {profile.about.map((text, i) => (
        <p key={i} className="about-text">{text}</p>
      ))}
    </section>
  );
}