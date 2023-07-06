import { motion } from "framer-motion";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/material";

interface Props {
  isPlayerRocket: boolean;
}
export const Planet = (props: Props) => {
  const color = props.isPlayerRocket ? blue[500] : red[500];
  const moonColor = props.isPlayerRocket ? blue["A700"] : red["A700"];
  const delay = props.isPlayerRocket ? 1 : 0;

  return (
    <Box
      sx={{
        width: { xs: "70%", md: "80%", lg: "85%" },
      }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 8,
          delay: delay,
          repeat: Infinity,
        }}
      >
        <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />
        <g transform="matrix(0.16 0 0 0.16 12 12)">
          <g>
            <g transform="matrix(1 0 0 1 0 7)">
              <path
                style={{
                  rotate: "90deg",
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: " #fff",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                id="planet-body"
                transform=" translate(-64, -71)"
                d="M 64 29 C 41.08018288202207 29 22.5 47.80404050710668 22.5 71 C 22.5 94.19595949289332 41.08018288202207 113 64 113 C 86.91981711797793 113 105.5 94.19595949289332 105.5 71 C 105.5 47.80404050710668 86.91981711797793 29 64 29 Z"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 17.5 7.5)">
              <path
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: color,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                id="planet-shadow"
                transform=" translate(-81.5, -71.5)"
                d="M 64 29.5 C 61.8 29.5 59.6 29.7 57.5 30 C 77.4 33.2 92.5 50.5 92.5 71.5 C 92.5 92.5 77.3 109.8 57.5 113 C 59.6 113.3 61.8 113.5 64 113.5 C 86.9 113.5 105.5 94.7 105.5 71.5 C 105.5 48.3 86.9 29.5 64 29.5 z"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 0 7.5)">
              <path
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: color,
                  fillRule: "nonzero",
                  opacity: 0.4,
                }}
                id="planet-outline"
                transform=" translate(-64, -71.5)"
                d="M 64 116.5 C 39.4 116.5 19.5 96.3 19.5 71.5 C 19.5 46.7 39.5 26.5 64 26.5 C 88.5 26.5 108.5 46.7 108.5 71.5 C 108.5 96.3 88.6 116.5 64 116.5 z M 64 32.5 C 42.7 32.5 25.5 50 25.5 71.5 C 25.5 93 42.8 110.5 64 110.5 C 85.2 110.5 102.5 93 102.5 71.5 C 102.5 50 85.3 32.5 64 32.5 z"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 -0.05 8.98)">
              <path
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: color,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                id="planet-ring"
                transform=" translate(-63.95, -72.98)"
                d="M 80.2 98 C 73.7 98 66.7 97.4 59.7 96.1 C 45.6 93.6 32.7 89 23.5 83 C 13.5 76.5 8.6 69 9.9 62 C 11 55.9 16.4 51.1 25.5 48.1 C 27.1 47.6 28.8 48.5 29.3 50 C 29.8 51.6 28.900000000000002 53.3 27.400000000000002 53.8 C 20.5 56 16.4 59.2 15.7 63 C 14.899999999999999 67.5 18.9 72.9 26.7 77.9 C 35.3 83.5 47.4 87.9 60.7 90.2 C 74 92.5 86.80000000000001 92.60000000000001 96.80000000000001 90.3 C 105.80000000000001 88.2 111.4 84.5 112.20000000000002 80 C 112.90000000000002 76 109.80000000000001 71.2 103.30000000000001 66.5 C 102.00000000000001 65.5 101.70000000000002 63.7 102.60000000000001 62.3 C 103.60000000000001 61 105.4 60.699999999999996 106.80000000000001 61.599999999999994 C 115.20000000000002 67.69999999999999 119.20000000000002 74.6 118.00000000000001 81 C 116.80000000000001 88 109.70000000000002 93.4 98.00000000000001 96.1 C 92.8 97.4 86.7 98 80.2 98 z"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 8.75 1.05)">
              <path
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: color,
                  fillRule: "nonzero",
                  opacity: 0.5,
                }}
                id="planet-craters"
                transform=" translate(-72.75, -65.05)"
                d="M 56 71.6 C 51.85786437626905 71.6 48.5 74.95786437626904 48.5 79.1 C 48.5 83.24213562373095 51.85786437626905 86.6 56 86.6 C 60.14213562373095 86.6 63.5 83.24213562373095 63.5 79.1 C 63.5 74.95786437626904 60.14213562373095 71.6 56 71.6 z M 61 43.5 C 58.79086100067683 43.5 57 45.29086100067683 57 47.5 C 57 49.70913899932317 58.79086100067683 51.5 61 51.5 C 63.20913899932317 51.5 65 49.70913899932317 65 47.5 C 65 45.29086100067683 63.20913899932317 43.5 61 43.5 z M 91 61.5 C 87.68629150101523 61.5 85 64.18629150101523 85 67.5 C 85 70.81370849898477 87.68629150101523 73.5 91 73.5 C 94.31370849898477 73.5 97 70.81370849898477 97 67.5 C 97 64.18629150101523 94.31370849898477 61.5 91 61.5 z"
                strokeLinecap="round"
              />
            </g>
            {props.isPlayerRocket && (
              <g transform="matrix(1 0 0 1 -35.9 -32.86)">
                <motion.path
                  animate={{
                    x: [-40, -60, -40, 0, 40, 60, 50],
                    y: [0, 5, 8, 6],
                    opacity: [1, 1, 1, 1, 1, 1, 0],
                    scale: [1.5, 2, 2.5, 3, 2.5, 2, 1.5],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeDashoffset: 0,
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    fill: moonColor,
                    fillRule: "nonzero",
                  }}
                  id="planet-high-moon"
                  transform=" translate(-28.1, -31.14)"
                  d="M 28.1 34.1 C 27.3 34.1 26.5 33.800000000000004 26 33.2 C 25.5 32.6 25.1 31.900000000000002 25.1 31.1 C 25.1 30.3 25.400000000000002 29.5 26 29 C 27.1 27.9 29.1 27.9 30.2 29 C 30.8 29.6 31.099999999999998 30.3 31.099999999999998 31.1 C 31.099999999999998 31.900000000000002 30.799999999999997 32.7 30.2 33.2 C 29.7 33.7 28.9 34.1 28.1 34.1 z"
                  strokeLinecap="round"
                />
              </g>
            )}
            {!props.isPlayerRocket && (
              <g transform="matrix(1 0 0 1 54.1 45.14)">
                <motion.path
                  animate={{
                    x: [-140, -105, -240, -210],
                    y: [-155, -160, -130, -140],
                    opacity: [0, 1, 1, 1, 1, 1, 0],
                    scale: [1.5, 2, 2.5, 3, 2.5, 2, 1.5],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeDashoffset: 0,
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    fill: moonColor,
                    fillRule: "nonzero",
                  }}
                  id="planet-low-moon"
                  transform=" translate(-118.1, -109.14)"
                  d="M 118.1 112.1 C 117.3 112.1 116.5 111.8 116 111.19999999999999 C 115.5 110.59999999999998 115.1 109.89999999999999 115.1 109.1 C 115.1 108.3 115.39999999999999 107.5 116 107 C 117.1 105.9 119.1 105.9 120.2 107 C 120.8 107.6 121.10000000000001 108.3 121.10000000000001 109.1 C 121.10000000000001 109.89999999999999 120.80000000000001 110.69999999999999 120.2 111.19999999999999 C 119.6 111.69999999999999 118.9 112.1 118.1 112.1 z"
                  strokeLinecap="round"
                />
              </g>
            )}
          </g>
        </g>
      </motion.svg>
    </Box>
  );
};
