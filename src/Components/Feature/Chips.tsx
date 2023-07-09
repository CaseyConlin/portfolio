import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { NodejsIcon } from "./icons/NodejsIcon";
import { NextjsIcon } from "./icons/NextjsIcon";
import { SassIcon } from "./icons/SassIcon";
import { WordpressIcon } from "./icons/WordpressIcon";
import { BootstrapIcon } from "./icons/BoostrapIcon";
import { MongoDBIcon } from "./icons/MongoDBIcon";
import { ExpressIcon } from "./icons/ExpressIcon";
import { ReactSpringIcon } from "./icons/ReactSpringIcon";
import { FramerIcon } from "./icons/FramerIcon";
import { ApiIcon } from "./icons/ApiIcon";
import { StitchesIcon } from "./icons/StitchesIcon";
import { MuiIcon } from "./icons/MuiIcon";
import { JsIcon } from "./icons/JsIcon";
import { PhpIcon } from "./icons/PhpIcon";
import { CssIcon } from "./icons/CssIcon";
import { JestIcon } from "./icons/JestIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { DigitalOceanIcon } from "./icons/DigitalOceanIcon";
import { MySqlIcon } from "./icons/MySQL";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const chipData = [
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextjsIcon /> },
  { name: "JavaScript", icon: <JsIcon /> },
  { name: "PHP", icon: <PhpIcon /> },
  { name: "TypeScript", icon: <TypescriptIcon /> },
  { name: "Tailwind", icon: <TailwindIcon /> },
  { name: "Material UI", icon: <MuiIcon /> },
  { name: "Stitches", icon: <StitchesIcon /> },
  { name: "Bootstrap", icon: <BootstrapIcon /> },
  { name: "Sass", icon: <SassIcon /> },
  { name: "CSS", icon: <CssIcon /> },
  { name: "WordPress", icon: <WordpressIcon /> },
  { name: "Node.js", icon: <NodejsIcon /> },
  { name: "MongoDB", icon: <MongoDBIcon /> },
  { name: "MySQL", icon: <MySqlIcon /> },
  { name: "Express.js", icon: <ExpressIcon /> },
  { name: "React Spring", icon: <ReactSpringIcon /> },
  { name: "Framer Motion", icon: <FramerIcon /> },
  { name: "API", icon: <ApiIcon /> },
  { name: "Jest", icon: <JestIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "DigitalOcean", icon: <DigitalOceanIcon /> },
];

export const ChipsArray = (techItems: TechItems) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData
        .filter((item) => techItems.techItems.toString().includes(item.name))
        .map((data) => {
          return (
            <ListItem key={data.name}>
              <Chip icon={data.icon} color="buttonFeature" label={data.name} />
            </ListItem>
          );
        })}
    </Box>
  );
};
