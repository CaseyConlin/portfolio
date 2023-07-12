import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export interface Props {
  headingText: string;
  id: string;
  marginOffset: number;
}

export const SectionHeading = ({ headingText, id, marginOffset }: Props) => {
  return (
    <Typography
      variant="h2"
      mb={{ xs: marginOffset + 1.5, md: marginOffset + 1, lg: marginOffset }}
      pb={0}
      pt={{ xs: 10, md: 20 }}
      px={{ xs: 3, md: 4 }}
      fontSize={{ xs: "2.875rem", sm: "4rem", md: "6rem" }}
      fontWeight={900}
      id={id}
      sx={{ backgroundColor: "#000", color: "white" }}
    >
      <motion.div
        style={{ zIndex: 0, position: "relative", overflow: "hidden" }}
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ margin: "-50px" }}
        id={id}
      >
        {headingText}
      </motion.div>
    </Typography>
  );
};
