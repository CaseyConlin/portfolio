type TechItems = {
  techItems: (
    | "Tailwind"
    | "React"
    | "TypeScript"
    | "Node.js"
    | "Next.js"
    | "Sass"
    | "WordPress"
    | "Bootstrap"
    | "MongoDB"
    | "Express.js"
    | "React Spring"
    | "Framer Motion"
    | "API"
    | "Stitches"
    | "Material UI"
    | "JavaScript"
    | "PHP"
    | "CSS"
    | "Jest"
    | "Figma"
    | "DigitalOcean"
    | "MySQL"
  )[];
};

type userScore = {
  name: string;
  score: number;
  word: string;
  gameDate: Date;
};

// type userScoresResponse = {
//   userScore[] | Error;
// };
