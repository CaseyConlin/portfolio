import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { red } from "@mui/material/colors";
import { cardAnimationVariants } from "./CardAnimation";

export interface Props {
  height: number;
}
export const MasonryContactCard = ({ height }: Props) => {
  const theme = useTheme();
  const CardMotion = motion(Card);

  return (
    <CardMotion
      raised
      sx={{
        display: "flex",
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        flexDirection: "column",
        height: `${height.toString()}px`,
        transform: "rotate(-1deg)",
      }}
      variants={cardAnimationVariants}
      initial="initial"
      whileInView="animate"
    >
      <CardContent>
        <Typography id="about" fontWeight={900} variant="h4">
          <SendIcon />
          Contact
        </Typography>
        <Typography variant="subtitle1" color="text.primary" component="p">
          Let's connect!{" "}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mb: 3,
          flexDirection: "column",
          backgroundColor: red[400],
          color: "white",
        }}
      >
        <Stack direction="column" alignItems="flex-start">
          <Button
            color="inherit"
            aria-label="email address"
            href="mailto:casey.conlin@gmail.com"
            target="_blank"
            startIcon={<Email fontSize="large" />}
            sx={{ textTransform: "none" }}
          >
            casey.conlin@gmail.com
          </Button>
          <Button
            color="inherit"
            aria-label="LinkedIn"
            href="https://linkedin.com/in/CaseyConlin/"
            target="_blank"
            startIcon={<LinkedIn fontSize="large" />}
            sx={{ textTransform: "none" }}
          >
            linkedin.com/in/CaseyConlin/
          </Button>
          <Button
            color="inherit"
            aria-label="Github"
            href="https://github.com/CaseyConlin/"
            target="_blank"
            startIcon={<GitHub fontSize="large" />}
            sx={{ textTransform: "none" }}
          >
            github.com/CaseyConlin/
          </Button>
          <Button
            color="inherit"
            aria-label="Github"
            startIcon={<PhoneIphoneIcon fontSize="large" />}
            sx={{ textTransform: "none" }}
          >
            631.741.9683{" "}
          </Button>
        </Stack>
      </CardActions>
    </CardMotion>
  );
};
