import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.blackboard}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="700"
          height="700"
          viewBox="0 0 700 700"
          className={styles.rocket}
        >
          <desc>Created with Fabric.js 5.3.0</desc>
          <defs></defs>
          <g
            transform="matrix(1 0 0 1 24456.0903339666 24347.3048413741)"
            id="rocket"
          >
            <path
              transform=" translate(0, 0)"
              d="M -130.31965 -43.48444 C -114.70814999999999 -164.46145 1.0394799999999975 -241.95403000000002 1.0394799999999975 -241.95403000000002 C 1.0394799999999975 -241.95403000000002 114.66421 -164.46145 130.27571 -43.484440000000006 C 145.88721 77.49257 63.48548000000001 241.95402 63.48548000000001 241.95402 L -61.40652999999999 241.95402 C -61.40652999999999 241.95402 -145.93115999999998 77.49257 -130.31966 -43.484440000000006 z"
              stroke-linecap="round"
            />
          </g>
          <g
            transform="matrix(1 0 0 1 348.8993710691 350)"
            id="M2UpOIReKwVZ8B8XzrYvt"
          >
            <g vector-effect="non-scaling-stroke">
              <g
                transform="matrix(-1 0 0 1 139.2528722082 94.0323469837)"
                id="right-fin"
                className={styles.fin}
              >
                <path
                  pathLength="1"
                  vector-effect="non-scaling-stroke"
                  transform=" translate(0, 0)"
                  d="M 13.46995 -110.34483 C 12.92005 -110.34483 -38.28568 -70.17895 -50.78490000000001 -17.48724 C -64.41224000000001 39.96015 -39.403620000000004 110.34483 -39.403620000000004 110.34483 L 54.84925 40.22989 C 54.84925 40.22989 14.61936 -110.34482000000001 13.469940000000001 -110.34482000000001 z"
                  stroke-linecap="round"
                />
              </g>
              <g
                transform="matrix(1 0 0 1 -139.2528749182 94.0323493975)"
                id="left-fin"
                className={styles.fin}
              >
                <path
                  vector-effect="non-scaling-stroke"
                  transform=" translate(0.0000123998, 0)"
                  d="M 13.46995 -110.34483 C 12.92005 -110.34483 -38.28568 -70.17895 -50.78490000000001 -17.48724 C -64.41224000000001 39.96015 -39.403620000000004 110.34483 -39.403620000000004 110.34483 L 54.84925 40.22989 C 54.84925 40.22989 14.61936 -110.34482000000001 13.469940000000001 -110.34482000000001 z"
                  stroke-linecap="round"
                />
              </g>
              <g
                transform="matrix(1 0 0 1 0.669833852 -139.649315464)"
                id="window"
                className={styles.window}
              >
                <path
                  vector-effect="non-scaling-stroke"
                  transform=" translate(-68.39081, -68.39081)"
                  d="M 68.39081 0 C 106.14254 0 136.78162 30.63908 136.78162 68.39081 C 136.78162 106.14254 106.14254 136.78162 68.39081 136.78162 C 30.63908 136.78162 0 106.14254 0 68.39081 C 0 30.63908 30.63908 0 68.39081 0 z M 12.3908 68.3908 C 12.3908 99.30279999999999 37.4788 124.3908 68.3908 124.3908 C 99.30279999999999 124.3908 124.3908 99.30279999999999 124.3908 68.3908 C 124.3908 37.4788 99.30279999999999 12.390799999999999 68.3908 12.390799999999999 C 37.4788 12.390799999999999 12.390799999999999 37.4788 12.390799999999999 68.3908 z"
                  stroke-linecap="round"
                />
              </g>
              <g
                transform="matrix(1 0 0 1 0.6574598686 -37.0021357749)"
                id="rocket-body"
                className={styles.rocketbody}
              >
                <path
                  vector-effect="non-scaling-stroke"
                  transform=" translate(0, 0)"
                  d="M -128.30824 -102.64718 C -122.05073000000002 -144.30455 -85.86096 -193.10345 -85.86096 -193.10345 L 1.6205899999999929 -193.10345 L 84.66891 -193.10345 C 84.66891 -193.10345 123.20661 -139.64222 128.51551999999998 -102.64718 C 145.71116999999998 17.180409999999995 70.40318999999998 193.10345 70.40318999999998 193.10345 L -70.37843000000002 193.10345 C -70.37843000000002 193.10345 -146.30799000000002 17.180410000000023 -128.30823000000004 -102.64717999999999 z"
                  stroke-linecap="round"
                />
              </g>
              <g
                transform="matrix(1 0 0 1 -0.0546967318 -286.5346809354)"
                id="nose"
                className={styles.fin}
              >
                <path
                  vector-effect="non-scaling-stroke"
                  transform=" translate(0, 0)"
                  d="M -52.26549 -10.07771 C -30.96676 -30.76737 0.7121500000000012 -41.379310000000004 0.7121500000000012 -41.379310000000004 C 0.7121500000000012 -41.379310000000004 32.22784 -30.767370000000003 53.17049 -10.077710000000003 C 74.11314 10.611949999999997 84.48275 41.37931 84.48275 41.37931 L -84.48277 41.37931 C -84.48277 41.37931 -73.56423000000001 10.611939999999997 -52.2655 -10.077710000000003 z"
                  stroke-linecap="round"
                />
              </g>
              <g
                transform="matrix(1 0 0 1 2.8413154753 256.3507728894)"
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
        </svg>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
