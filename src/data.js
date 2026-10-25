export const profile = {
  name: "Phoolchand Singh",
  role: "Frontend Developer",
  tagline:
    "A passionate web designer creating immersive web experiences and leaving a mark on the industry.",
  // TODO: rewrite these in your own words
  about: [
    "I'm a frontend developer who enjoys turning ideas into clean, responsive websites.",
    "I build with HTML, CSS, JavaScript and React, and I use Firebase when a project needs a database.",
  ],
  email: "", // add your email, e.g. "you@example.com"
};

export const projects = [
  {
    title: "TaskFlow",
    description:
      "A task manager where you create lists, add prioritized tasks, track progress and see changes sync in real time.",
    tech: ["React", "Vite", "Firebase", "React Router", "Bootstrap"],
    live: "https://90541138318.github.io/capstone/",
    repo: "https://github.com/90541138318/capstone",
    image: null, // e.g. "screenshots/taskflow.png" (file goes in public/screenshots/)
  },
  {
    title: "Quiz Trivia",
    description: "An interactive trivia quiz that tests your knowledge across questions.", // TODO: adjust
    tech: ["HTML", "CSS", "JavaScript"], // TODO: confirm
    live: "https://90541138318.github.io/quiztriva/quiz/", // TODO: this link gave a 404
    repo: "",
    image: null,
  },
  {
    title: "Three Star Media",
    description:
      "A multi-section marketing website with services, team and contact form, built as my first-year web development final project.",
    tech: ["HTML", "CSS"],
    live: "https://90541138318.github.io/final-project/index.html",
    repo: "",
    image: null,
  },
];

export const skills = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"] },
  { group: "Tools & Backend", items: ["Vite", "Git & GitHub", "Firebase (Firestore)"] },
];

// Links with an empty url are hidden automatically.
export const socials = [
  { name: "GitHub", url: "https://github.com/90541138318" },
  { name: "LinkedIn", url: "" },
  { name: "Instagram", url: "" },
  { name: "Facebook", url: "" },
  { name: "YouTube", url: "" },
];