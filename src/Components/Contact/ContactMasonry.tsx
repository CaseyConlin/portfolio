import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { MasonryPersonalCard } from "./MasonryPersonalSubCard";
import { MasonryContactCard } from "./MasonryContactSubCard";
import Photo from "/conlin.jpg";
import Photo2 from "/dogs.png";
import { cardAnimationVariants } from "./CardAnimation";

const cards = [
  <MasonryPersonalCard height={275} key="mpc" />,

  <motion.img
    key="image1"
    src={`${Photo}?w=162&auto=format`}
    alt={Photo}
    loading="lazy"
    style={{
      borderRadius: 4,
      borderBottomRightRadius: 4,
      paddingTop: 1,
      display: "block",
      width: "45%",
      transform: "rotate(1deg)",
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
    }}
    variants={cardAnimationVariants}
    initial="initial"
    whileInView="animate"
  />,
  <MasonryContactCard height={262} key="mcc" />,

  <motion.img
    key="image2"
    src={`${Photo2}?w=162&auto=format`}
    alt={Photo2}
    loading="lazy"
    style={{
      borderRadius: 4,
      borderBottomRightRadius: 4,
      display: "block",
      width: "40%",
      transform: "rotate(-1deg)",
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
    }}
    variants={cardAnimationVariants}
    initial="initial"
    whileInView="animate"
  />,
];

export const ContactMasonry = () => {
  return (
    <Box sx={{ width: { xs: "100%" }, minHeight: 393 }}>
      <Masonry columns={2} spacing={2}>
        {cards.map((card) => card)}
      </Masonry>
    </Box>
  );
};
