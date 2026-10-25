import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { profile, socials } from "../data";

const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  YouTube: FaYoutube,
};

export default function Contact() {
  return (
    <section id="contact" className="section container narrow center">
      <h2 className="section-title">Get in touch</h2>
      <p className="about-text">
        I'm open to opportunities and happy to talk about new projects.
      </p>
      {profile.email && (
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          Email me
        </a>
      )}
      <div className="socials">
        {socials
          .filter((s) => s.url)
          .map((s) => {
            const Icon = icons[s.name];
            return (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                <Icon />
              </a>
            );
          })}
      </div>
    </section>
  );
}