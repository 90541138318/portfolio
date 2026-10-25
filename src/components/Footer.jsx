import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}