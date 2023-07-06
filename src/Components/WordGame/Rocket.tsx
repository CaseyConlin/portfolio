// Each rocket manages its own state. A boolean state for the player
// rocket determines the color and relevant count and from context to use in animating
// rocket parts.
import { useEffect, useState } from "react";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { amber } from "@mui/material/colors";
import { motion } from "framer-motion";
import styles from "./WordGameContainer.module.css";
import { useGameContext } from "../../WordGameContext/WordGameContext";

interface Props {
  isPlayerRocket: boolean;
}

export const Rocket = (props: Props) => {
  const [isOpenRightFin, setOpenRightFin] = useState(false);
  const [isOpenLeftFin, setOpenLeftFin] = useState(false);
  const [isOpenNose, setOpenNose] = useState(false);
  const [isOpenWindow, setOpenWindow] = useState(false);
  const [isOpenFire, setOpenFire] = useState(false);
  const [haveLiftOff, setHaveLiftOff] = useState(false);

  const { errorCount, rightCount, secretWord } = useGameContext();

  const count =
    secretWord && props.isPlayerRocket
      ? 5 - Math.floor((rightCount / secretWord.length) * 5)
      : errorCount;
  const color = props.isPlayerRocket ? blue[500] : red[500];

  useEffect(() => {
    //Update rocket part showing states based on counter from context.
    //If the counter resets to 5, reset animations.
    if (count === 5) {
      setOpenNose(false);
      setOpenRightFin(false);
      setOpenLeftFin(false);
      setOpenWindow(false);
      setHaveLiftOff(false);
      setOpenFire(false);
    }
    if (count <= 4) {
      setOpenNose(true);
    }
    if (count <= 3) {
      setOpenRightFin(true);
    }
    if (count <= 2) {
      setOpenLeftFin(true);
    }
    if (count <= 1) {
      setOpenWindow(true);
    }
    if (count <= 0) {
      setOpenFire(true);
      setHaveLiftOff(true);
    }
  }, [count]);

  const rocketAnimation = {
    start: {
      x: 0,
      y: "0vh",
      transition: {},
    },
    fly: {
      x: [0, 5],
      transition: {
        type: "spring",
        damping: 1,
        mass: 1,
        stiffness: 1000,
      },
      repeat: 1,
    },
    out: {
      y: ["0vh", "-120vh"],
      transition: {
        duration: 1,
        delay: 1.5,
        ease: "easeIn",
      },
    },
  };

  const rocketWindowAnimation = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgb(129, 173, 235)",
    },
  };

  //Rocket is broken up into individual groups and paths which are animated into view in the larger SVG.
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="135"
      height="135"
      viewBox="0 0 200 200"
      variants={rocketAnimation}
      className={styles.rocket}
      initial={"start"}
      animate={haveLiftOff ? ["fly", "out"] : ["", ""]}
      style={{ marginBottom: "-45px", zIndex: 100 }}
    >
      <g
        transform="matrix(1 0 0 1 100.2672507609 90.1782811413)"
        id="37ENkknabLuQAcu8iAC3-"
      >
        <g vectorEffect="non-scaling-stroke">
          <g
            transform="matrix(-0.2845185561 0 0 0.2845185561 39.6808506329 39.481557075)"
            id="rightfin"
            className={styles.fin}
          >
            <path
              d="M 30.85869 -36.35744 C 30.85869 -36.35744 13.40905 -111.2235 12.83623 -111.2235 C 12.28633 -111.2235 -40.72644 -69.30026000000001 -53.225660000000005 -16.608550000000008 C -66.85300000000001 40.83883999999999 -41.84438 111.22352 -41.84438 111.22352 L 57.29003 41.10857999999999 z"
              strokeLinecap="round"
              stroke={color}
              strokeWidth="10px"
              fill="transparent"
            />
            {isOpenRightFin && (
              <motion.path
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 1,
                  stiffness: 500,
                }}
                initial={{ y: -100, x: 100 }}
                animate={{ y: 0, x: 0 }}
                vectorEffect="non-scaling-stroke"
                transform=" translate(0, 0)"
                d="M 30.85869 -36.35744 C 30.85869 -36.35744 13.40905 -111.2235 12.83623 -111.2235 C 12.28633 -111.2235 -40.72644 -69.30026000000001 -53.225660000000005 -16.608550000000008 C -66.85300000000001 40.83883999999999 -41.84438 111.22352 -41.84438 111.22352 L 57.29003 41.10857999999999 z"
                strokeLinecap="round"
                stroke={color}
                fill={color}
              />
            )}
          </g>

          <g
            transform="matrix(0.2845185561 0 0 0.2845185561 -39.6808514948 39.481558178)"
            id="leftfin"
            className={styles.fin}
          >
            <path
              d="M 30.85869 -36.35744 C 30.85869 -36.35744 13.40905 -111.2235 12.83623 -111.2235 C 12.28633 -111.2235 -40.72644 -69.30026000000001 -53.225660000000005 -16.608550000000008 C -66.85300000000001 40.83883999999999 -41.84438 111.22352 -41.84438 111.22352 L 57.29003 41.10857999999999 z"
              strokeLinecap="round"
              stroke={color}
              strokeWidth="10px"
              fill="transparent"
            />
            {isOpenLeftFin && (
              <motion.path
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 1,
                  stiffness: 500,
                }}
                initial={{ y: -100, x: 100 }}
                animate={{ y: 0, x: 0 }}
                vectorEffect="non-scaling-stroke"
                transform=" translate(0.0000023998, -0.00001)"
                d="M 30.85869 -36.35744 C 30.85869 -36.35744 13.40905 -111.2235 12.83623 -111.2235 C 12.28633 -111.2235 -40.72644 -69.30026000000001 -53.225660000000005 -16.608550000000008 C -66.85300000000001 40.83883999999999 -41.84438 111.22352 -41.84438 111.22352 L 57.29003 41.10857999999999 z"
                strokeLinecap="round"
                stroke={color}
                fill={color}
              />
            )}
          </g>

          <g
            transform="matrix(0.2845185561 0 0 0.4111698806 -0.2672507609 -70.5056258837)"
            id="nose"
            className={styles.fin}
          >
            <path
              transform=" translate(0, 0)"
              d="M -52.26549 -10.07771 C -30.96676 -30.76737 0.7121500000000012 -41.379310000000004 0.7121500000000012 -41.379310000000004 C 0.7121500000000012 -41.379310000000004 32.22784 -30.767370000000003 53.17049 -10.077710000000003 C 74.11314 10.611949999999997 84.48275 41.37931 84.48275 41.37931 C 84.48275 41.37931 43.842 31.987649999999995 1.6006199999999922 31.987649999999995 C -40.64076000000001 31.987649999999995 -84.48277 41.37931 -84.48277 41.37931 C -84.48277 41.37931 -73.56423000000001 10.611939999999997 -52.2655 -10.077710000000003 z"
              strokeLinecap="round"
              stroke={color}
              strokeWidth="10px"
              fill="transparent"
            />
            {isOpenNose && (
              <motion.path
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 1,
                  stiffness: 250,
                }}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                vectorEffect="non-scaling-stroke"
                transform=" translate(0, 0)"
                d="M -52.26549 -10.07771 C -30.96676 -30.76737 0.7121500000000012 -41.379310000000004 0.7121500000000012 -41.379310000000004 C 0.7121500000000012 -41.379310000000004 32.22784 -30.767370000000003 53.17049 -10.077710000000003 C 74.11314 10.611949999999997 84.48275 41.37931 84.48275 41.37931 C 84.48275 41.37931 43.842 31.987649999999995 1.6006199999999922 31.987649999999995 C -40.64076000000001 31.987649999999995 -84.48277 41.37931 -84.48277 41.37931 C -84.48277 41.37931 -73.56423000000001 10.611939999999997 -52.2655 -10.077710000000003 z"
                strokeLinecap="round"
                stroke={color}
                fill={color}
              />
            )}
          </g>

          <g
            transform="matrix(0.2845185561 0 0 0.2845185561 0.0620684352 0.5450529869)"
            id="rocketbody"
          >
            <path
              className={styles.rocketbody}
              vectorEffect="non-scaling-stroke"
              transform=" translate(0, 0)"
              d="M -128.30824 -95.9525 C -122.05073000000002 -137.60987 -85.86096 -186.40877 -85.86096 -186.40877 C -85.86096 -186.40877 -42.1893 -199.79814 0.44316999999999496 -199.79814 C 43.07563999999999 -199.79814 84.66891 -186.40877 84.66891 -186.40877 C 84.66891 -186.40877 123.20661 -132.94754 128.51551999999998 -95.9525 C 145.71116999999998 23.87509 70.40318999999998 199.79813000000001 70.40318999999998 199.79813000000001 L -70.37843000000002 199.79813000000001 C -70.37843000000002 199.79813000000001 -146.30799000000002 23.87509000000003 -128.30823000000004 -95.95249999999999 z"
              strokeLinecap="round"
            />
          </g>

          <g
            transform="matrix(0.3211499473 0 0 0.2845185561 -0.2672507609 -25.1518738955)"
            id="portwindow"
          >
            {isOpenWindow && (
              <motion.path
                className={styles.window}
                vectorEffect="non-scaling-stroke"
                transform=" translate(0, 0)"
                d="M 0 -63.42593 C 35.01111 -63.42593 63.42593 -35.011120000000005 63.42593 0 C 63.42593 35.01111 35.011120000000005 63.42593 0 63.42593 C -35.01111 63.42593 -63.42593 35.011120000000005 -63.42593 0 C -63.42593 -35.01111 -35.011120000000005 -63.42593 0 -63.42593 z"
                strokeLinecap="round"
                variants={rocketWindowAnimation}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                }}
              />
            )}
          </g>

          {isOpenFire && (
            <g
              transform="matrix(0.1876898245 0 0 0.1876898245 0.188158257 73.7124844301)"
              id="fire"
              className={styles.fire}
            >
              <motion.path
                vectorEffect="non-scaling-stroke"
                transform=" translate(0, 0)"
                d="M -72.56229 -28.83523 C -72.56229 -51.536379999999994 -50.38577000000001 -73.56322 -50.38577000000001 -73.56322 L 53.06250999999999 -73.56322 C 53.06250999999999 -73.56322 72.5623 -52.97316 72.5623 -28.835230000000003 C 72.5623 -4.697300000000002 53.06250999999999 22.988509999999998 53.06250999999999 22.988509999999998 L 35.82112999999999 57.47127 L 16.28089999999999 22.988509999999998 L -2.896010000000011 73.56322 L -17.05244000000001 22.988509999999998 L -38.891520000000014 57.47127 L -50.385770000000015 17.24138 C -50.385770000000015 17.24138 -72.56229000000002 -6.134080000000001 -72.56229000000002 -28.835230000000003 z"
                strokeLinecap="round"
                initial={{ opacity: 0, scale: 1, y: 0, fill: amber[100] }}
                animate={{
                  opacity: 1,
                  scale: 1.25,
                  y: 30,
                  fill: amber[700],
                }}
                transition={{
                  repeat: 6,
                  type: "spring",
                  bounce: 0.8,
                }}
              />
            </g>
          )}
        </g>
      </g>
    </motion.svg>
  );
};
