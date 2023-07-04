import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "../../App.css";
import styles from "./WordGameContainer.module.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import { KeyboardContainer } from "./KeyboardContainer";
import { SecretWordContainer } from "./SecretWordContainer";
import { ResetButton } from "./ResetButton";
import { NumberOfLettersSelector } from "./NumberOfLettersSelector";
import { ErrorCountViewer } from "./ErrorCountView";
import { Hint } from "./Hint";
import { Rocket } from "./Rocket";
import { WordGameProvider } from "./WordGameContext";
import { grey } from "@mui/material/colors";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const WordGame = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={styles.starsContainer}>
        <div className={styles.rocketsBackground}></div>

        <ThemeProvider theme={theme}>
          <WordGameProvider>
            <Grid
              container
              p={3}
              flexDirection={"row"}
              justifyContent={"flex-end"}
            >
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"space-around"}
                spacing={3}
                my={5}
                xs={12}
                sm={5}
                lg={5}
              >
                <Rocket isPlayerRocket={false} />
                <Rocket isPlayerRocket={true} />
              </Grid>
              <Grid xs={12} sm={7} lg={6}>
                <Card sx={{ m: 2 }}>
                  <CardHeader
                    titleTypographyProps={{
                      variant: "h2",
                      fontFamily: "Nasa",
                      fontWeight: 200,
                    }}
                    subheaderTypographyProps={{
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 600,
                      variant: "h2",
                    }}
                    sx={{
                      color: "#fff",
                      bgcolor: red[400],
                      p: 2,
                      mb: 5,
                      fontSize: "2.5rem",
                    }}
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: "#fff",
                          color: red[500],
                          width: "56px",
                          height: "56px",
                        }}
                        aria-label="rocket icon"
                      >
                        <RocketLaunchIcon fontSize="large" />
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="LIFT_FF"
                    subheader="Guess the letters in the word below to build & launch our rocket before the other team!"
                  />
                  <Box sx={{ p: { xs: 0 }, mx: -2, justifyContent: "center" }}>
                    <SecretWordContainer />
                    <Hint />
                  </Box>
                  <Grid
                    className="input-grid"
                    container
                    py={1}
                    justifyContent={"center"}
                    sx={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      backgroundColor: grey[200],
                      boxShadow: "1px -1px 3px  #212121 ",
                    }}
                  >
                    <Grid justifyContent="center" xs={7}>
                      {/* <Box sx={{ p: 2, justifyContent: "center" }}> */}
                      <KeyboardContainer />
                      {/* </Box> */}
                    </Grid>
                    <Grid
                      container
                      flexDirection={"column"}
                      flexWrap={"wrap"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      xs={4}
                    >
                      <ErrorCountViewer />
                      <NumberOfLettersSelector />
                      <ResetButton />
                    </Grid>
                  </Grid>

                  {/* <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                  /> */}
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with
                        artichokes and peppers, and cook without stirring, until
                        most of the liquid is absorbed, 15 to 18 minutes. Reduce
                        heat to medium-low, add reserved shrimp and mussels,
                        tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just
                        tender, 5 to 7 minutes more. (Discard any mussels that
                        don&apos;t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes,
                        and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          </WordGameProvider>
        </ThemeProvider>
      </div>
    </>
  );
};
