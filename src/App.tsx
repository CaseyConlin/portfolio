import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { motion, useSpring } from "framer-motion";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
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
import Grid from "@mui/material/Unstable_Grid2";
import Box, { BoxProps } from "@mui/material/Box";
import "./App.css";
import styles from "./App.module.css";
import { KeyboardLetterButton } from "./Components/WordGame/KeyboardLetterButton";

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

function App() {
  const [errorCount, setErrorCounter] = useState(6);
  const [isOpenRightFin, setOpenRightFin] = useState(false);
  const [isOpenLeftFin, setOpenLeftFin] = useState(false);
  const [isOpenNose, setOpenNose] = useState(false);
  const [isOpenWindow, setOpenWindow] = useState(false);
  const [isOpenFire, setOpenFire] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const windowAnimation = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgb(129, 173, 235)",
    },
  };

  const Item = styled("div")(({ theme }) => ({}));
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const secretWord = "Spaceships";
  return (
    <>
      <Grid container className={styles.blackboard}>
        <Grid xs={12} sm={5} lg={6}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className={styles.rocket}
            onClick={() => setOpenRightFin(true)}
            transition={{
              type: "spring",
              damping: 10,
              mass: 1,
              stiffness: 500,
            }}
            // initial={{ y: -100, x: 100 }}
            // animate={{ y: 0, x: 0 }}
          >
            <desc>Created with Fabric.js 5.3.0</desc>
            <defs></defs>
            <g
              transform="matrix(1 0 0 1 100.2672507609 90.1782811413)"
              id="37ENkknabLuQAcu8iAC3-"
            >
              <g vector-effect="non-scaling-stroke">
                {isOpenRightFin && (
                  <g
                    transform="matrix(-0.2845185561 0 0 0.2845185561 39.6808506329 39.481557075)"
                    id="rightfin"
                    className={styles.fin}
                  >
                    <motion.path
                      transition={{
                        type: "spring",
                        damping: 10,
                        mass: 1,
                        stiffness: 500,
                      }}
                      initial={{ y: -100, x: 100 }}
                      animate={{ y: 0, x: 0 }}
                      vector-effect="non-scaling-stroke"
                      transform=" translate(0, 0)"
                      d="M 30.85869 -36.35744 C 30.85869 -36.35744 13.40905 -111.2235 12.83623 -111.2235 C 12.28633 -111.2235 -40.72644 -69.30026000000001 -53.225660000000005 -16.608550000000008 C -66.85300000000001 40.83883999999999 -41.84438 111.22352 -41.84438 111.22352 L 57.29003 41.10857999999999 z"
                      stroke-linecap="round"
                    />
                  </g>
                )}
                <g
                  transform="matrix(0.2845185561 0 0 0.2845185561 -39.6808514948 39.481558178)"
                  id="leftfin"
                  className={styles.fin}
                >
                  <motion.path
                    transition={{
                      type: "spring",
                      damping: 10,
                      mass: 1,
                      stiffness: 500,
                    }}
                    initial={{ y: -100, x: 100 }}
                    animate={{ y: 0, x: 0 }}
                    vector-effect="non-scaling-stroke"
                    transform=" translate(0.0000023998, -0.00001)"
                    d="M 30.85869 -36.35744 C 30.85869 -36.35744 13.40905 -111.2235 12.83623 -111.2235 C 12.28633 -111.2235 -40.72644 -69.30026000000001 -53.225660000000005 -16.608550000000008 C -66.85300000000001 40.83883999999999 -41.84438 111.22352 -41.84438 111.22352 L 57.29003 41.10857999999999 z"
                    stroke-linecap="round"
                  />
                </g>
                <g
                  transform="matrix(0.2845185561 0 0 0.4111698806 -0.2672507609 -70.5056258837)"
                  id="nose"
                  className={styles.fin}
                >
                  <motion.path
                    transition={{
                      type: "spring",
                      damping: 10,
                      mass: 1,
                      stiffness: 250,
                    }}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    vector-effect="non-scaling-stroke"
                    transform=" translate(0, 0)"
                    d="M -52.26549 -10.07771 C -30.96676 -30.76737 0.7121500000000012 -41.379310000000004 0.7121500000000012 -41.379310000000004 C 0.7121500000000012 -41.379310000000004 32.22784 -30.767370000000003 53.17049 -10.077710000000003 C 74.11314 10.611949999999997 84.48275 41.37931 84.48275 41.37931 C 84.48275 41.37931 43.842 31.987649999999995 1.6006199999999922 31.987649999999995 C -40.64076000000001 31.987649999999995 -84.48277 41.37931 -84.48277 41.37931 C -84.48277 41.37931 -73.56423000000001 10.611939999999997 -52.2655 -10.077710000000003 z"
                    stroke-linecap="round"
                  />
                </g>
                <g
                  transform="matrix(0.2845185561 0 0 0.2845185561 0.0620684352 0.5450529869)"
                  id="rocketbody"
                >
                  <path
                    className={styles.rocketbody}
                    vector-effect="non-scaling-stroke"
                    transform=" translate(0, 0)"
                    d="M -128.30824 -95.9525 C -122.05073000000002 -137.60987 -85.86096 -186.40877 -85.86096 -186.40877 C -85.86096 -186.40877 -42.1893 -199.79814 0.44316999999999496 -199.79814 C 43.07563999999999 -199.79814 84.66891 -186.40877 84.66891 -186.40877 C 84.66891 -186.40877 123.20661 -132.94754 128.51551999999998 -95.9525 C 145.71116999999998 23.87509 70.40318999999998 199.79813000000001 70.40318999999998 199.79813000000001 L -70.37843000000002 199.79813000000001 C -70.37843000000002 199.79813000000001 -146.30799000000002 23.87509000000003 -128.30823000000004 -95.95249999999999 z"
                    stroke-linecap="round"
                  />
                </g>
                <g
                  transform="matrix(0.3211499473 0 0 0.2845185561 -0.2672507609 -25.1518738955)"
                  id="portwindow"
                >
                  <motion.path
                    className={styles.window}
                    vector-effect="non-scaling-stroke"
                    transform=" translate(0, 0)"
                    d="M 0 -63.42593 C 35.01111 -63.42593 63.42593 -35.011120000000005 63.42593 0 C 63.42593 35.01111 35.011120000000005 63.42593 0 63.42593 C -35.01111 63.42593 -63.42593 35.011120000000005 -63.42593 0 C -63.42593 -35.01111 -35.011120000000005 -63.42593 0 -63.42593 z"
                    stroke-linecap="round"
                    variants={windowAnimation}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      default: { duration: 2, ease: "easeInOut" },
                      fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                    }}
                    vectorEffect="non-scaling-stroke"
                  />
                </g>

                <g
                  transform="matrix(0.1876898245 0 0 0.1876898245 0.188158257 73.7124844301)"
                  id="fire"
                  className={styles.fire}
                >
                  <path
                    vector-effect="non-scaling-stroke"
                    transform=" translate(0, 0)"
                    d="M -72.56229 -28.83523 C -72.56229 -51.536379999999994 -50.38577000000001 -73.56322 -50.38577000000001 -73.56322 L 53.06250999999999 -73.56322 C 53.06250999999999 -73.56322 72.5623 -52.97316 72.5623 -28.835230000000003 C 72.5623 -4.697300000000002 53.06250999999999 22.988509999999998 53.06250999999999 22.988509999999998 L 35.82112999999999 57.47127 L 16.28089999999999 22.988509999999998 L -2.896010000000011 73.56322 L -17.05244000000001 22.988509999999998 L -38.891520000000014 57.47127 L -50.385770000000015 17.24138 C -50.385770000000015 17.24138 -72.56229000000002 -6.134080000000001 -72.56229000000002 -28.835230000000003 z"
                    stroke-linecap="round"
                  />
                </g>
              </g>
            </g>
          </motion.svg>
        </Grid>
        <Grid xs={12} sm={7} lg={6}>
          <Card sx={{ m: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <Box sx={{ p: { xs: 0 }, mx: -2, justifyContent: "center" }}>
              <Grid
                container
                sx={{ justifyContent: "center" }}
                spacing={{ xs: 1, md: 1 }}
              >
                {Array.from(secretWord).map((x, index) => (
                  <Grid
                    container
                    sx={{
                      justifyContent: "center",
                      alignContent: "center",
                      p: 1,
                    }}
                    xs={1}
                    sm={1}
                    key={x + index}
                  >
                    <Item
                      sx={{
                        p: 0,
                        width: { xs: "25px", md: "45px" },
                        height: { xs: "25px", md: "45px" },
                        boxShadow: 3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#000",
                        backgroundColor: "#D3D3D3",
                        textTransform: "uppercase",
                        border: "1px solid",
                        borderColor: "#444d58",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: 900,
                      }}
                      className="valera"
                    >
                      {x}
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box sx={{ p: 2, justifyContent: "center" }}>
              <Grid
                container
                sx={{ justifyContent: "center" }}
                spacing={{ xs: 1, md: 1 }}
                columns={{ xs: 3, sm: 7, md: 8, lg: 10 }}
              >
                {/* 
  const alphabet = alpha.map((x) => String.fromCharCode(x)); */}
                {alpha.map((x) => (
                  <KeyboardLetterButton word={secretWord} letterCharCode={x} />
                ))}
              </Grid>
            </Box>
            <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
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
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button color="secondary">
        count is {errorCount}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
