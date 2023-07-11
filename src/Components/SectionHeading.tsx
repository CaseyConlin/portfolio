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
      mb={marginOffset}
      pb={0}
      pt={{ md: 20 }}
      px={4}
      fontSize={{ xs: "2xl", sm: "3xl", md: "6rem" }}
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
