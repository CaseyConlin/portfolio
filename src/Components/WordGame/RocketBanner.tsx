import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

interface Props {
  isPlayerRocket: boolean;
}

export const RocketBanner = (props: Props) => {
  const color = props.isPlayerRocket ? blue[500] : red[500];

  return (
    <Grid
      textAlign={"center"}
      alignContent={"center"}
      py={2}
      borderRadius={2}
      fontSize={"2rem"}
      fontFamily={"Nasa"}
      justifySelf="flex-start"
      sx={{
        color: color,
        backgroundColor: "#fff",
        width: "100%",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
      }}
    >
      {props.isPlayerRocket ? "Us" : "Them"}
    </Grid>
  );
};
