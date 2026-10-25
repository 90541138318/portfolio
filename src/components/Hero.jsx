import profileImg from "../assets/profile.jpg";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-text">
        <p className="eyebrow">Hello, it's me</p>
        <h1>{profile.name}</h1>
        <h2>And I'm a {profile.role}</h2>
        <p className="lead">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View projects</a>
          <a href="#contact" className="btn btn-outline">Get in touch</a>
        </div>
      </div>
      <img
        className="hero-photo"
        src={profileImg}
        alt={`Portrait of ${profile.name}`}
      />
    </section>
  );
}