// import { useState } from "react";
// import Card from "@mui/material/Card";
// // import CardHeader from "@mui/material/CardHeader";
// import CardActions from "@mui/material/CardActions";
// // import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// // import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// import Grid from "@mui/material/Unstable_Grid2";
// // import Box from "@mui/material/Box";
// import "../../App.css";
// import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { WordGameCardHeader } from "./WordGameCardHeader";
// import { SecretWordSection } from "./SecretWordSection";
// import { KeyboardContainer } from "./KeyboardContainer";
// import { KeyboardLetterButton } from "./KeyboardLetterButton";
// import { SecretWordContainer } from "./SecretWordContainer";
// import { SecretLetterTile } from "./SecretLetterTile";
// import { ResetButton } from "./ResetButton";
// import { NumberOfLettersSelector } from "./NumberOfLettersSelector";
// import { ErrorCountViewer } from "./ErrorCountView";
// import { WordGameCardDrawer } from "./WordGameCardDrawer";
// import { Hint } from "./Hint";
// import { grey } from "@mui/material/colors";
// // import { red } from "@mui/material/colors";

// export interface Props {
//   secretWord: string[];
//   hint: string;
//   errorCount: number;
//   guessedLetters: string[];
//   keyboardLetterHandler: (
//     letter: string
//   ) => (event: React.MouseEventHandler<HTMLButtonElement>) => [typeof letter];
// }

// const alpha = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65));

// export const WordGameCard = ({
//   secretWord,
//   hint,
//   errorCount,
//   guessedLetters,
//   keyboardLetterHandler,
// }: Props) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer =
//     (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === "keydown" &&
//         ((event as React.KeyboardEvent).key === "Tab" ||
//           (event as React.KeyboardEvent).key === "Shift")
//       ) {
//         return;
//       }
//       setIsDrawerOpen(isOpen);
//     };

//   const secretLetterHandler = (letter: string) => {
//     return guessedLetters.includes(letter) ? true : false;
//   };

//   console.log(guessedLetters);
//   return (
//     <Card sx={{ m: { xs: 1, sm: 2 } }}>
//       <WordGameCardHeader />
//       {/* <CardHeader
//         titleTypographyProps={{
//           variant: "h2",
//           fontFamily: "Nasa",
//           fontWeight: 200,
//         }}
//         subheaderTypographyProps={{
//           color: "#fff",
//           fontSize: "1rem",
//           fontWeight: 600,
//           variant: "h2",
//         }}
//         sx={{
//           color: "#fff",
//           bgcolor: red[400],
//           p: 2,
//           mb: 1,
//           fontSize: "2.5rem",
//         }}
//         avatar={
//           <Avatar
//             sx={{
//               bgcolor: "#fff",
//               color: red[500],
//               width: "56px",
//               height: "56px",
//             }}
//             aria-label="rocket icon"
//           >
//             <RocketLaunchIcon fontSize="large" />
//           </Avatar>
//         }
//         title="LIFT_FF"
//         subheader="Guess the letters in the word below to build & launch our rocket before the other team!"
//       /> */}

//       {/* <Box sx={{ p: { xs: 0 }, mx: -2, justifyContent: "center" }}> */}
//       <SecretWordSection>
//         <SecretWordContainer>
//           {secretWord &&
//             secretWord.map((letter: string, index: number) => (
//               <SecretLetterTile
//                 secretLetter={letter}
//                 index={index}
//                 key={letter + index}
//                 show={guessedLetters.includes(letter)}
//               />
//             ))}
//         </SecretWordContainer>

//         <Hint hint={hint} />
//       </SecretWordSection>
//       {/* </Box> */}

//       <Grid
//         className="input-grid"
//         container
//         py={1}
//         justifyContent={"center"}
//         sx={{
//           flexDirection: "row",
//           flexWrap: "wrap",
//           backgroundColor: grey[200],
//           boxShadow: "1px -1px 3px  #212121 ",
//         }}
//       >
//         <Grid justifyContent="center" xs={12} md={7}>
//           <KeyboardContainer>
//             {alpha.map((letter) => (
//               <Grid
//                 key={letter}
//                 container
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 spacing={0}
//                 sx={{
//                   aspectRatio: 1 / 1,
//                 }}
//                 xs={1.3}
//                 sm={1.7}
//                 md={2}
//               >
//                 <KeyboardLetterButton
//                   keyboardLetter={letter}
//                   click={() => keyboardLetterHandler(letter)}
//                   guessed={guessedLetters.includes(letter)}
//                   right={false}
//                   wrong={false}
//                 />
//               </Grid>
//             ))}
//           </KeyboardContainer>
//         </Grid>
//         <Grid
//           container
//           flexDirection={{ xs: "row", md: "column" }}
//           flexWrap={"wrap"}
//           justifyContent={{ xs: "space-around", md: "flex-start" }}
//           xs={12}
//           md={4}
//         >
//           <ErrorCountViewer errorCount={errorCount} />
//           <NumberOfLettersSelector />
//           <ResetButton />
//         </Grid>
//       </Grid>
//       <CardActions onClick={() => setIsDrawerOpen(true)}>
//         <Button sx={{ color: "#000" }}>
//           <VideogameAssetIcon fontSize="large" sx={{ paddingRight: "10px" }} />
//           <Typography> Game Info</Typography>
//           <KeyboardArrowRightIcon />
//         </Button>
//       </CardActions>
//       <WordGameCardDrawer
//         toggleDrawer={toggleDrawer}
//         isDrawerOpen={isDrawerOpen}
//       />
//     </Card>
//   );
// };
