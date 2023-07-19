import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export interface Props {
  keyboardLetter: string;
  guessed: boolean;
  right?: boolean;
  wrong?: boolean;
  click: React.MouseEventHandler<HTMLButtonElement>;
}

export const KeyboardLetterButton = ({
  keyboardLetter,
  guessed,
  right,
  wrong,
  click,
}: Props) => {
  const KeyBoardButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1),
    border: "1px solid #000",
    color: "#000",
    backgroundColor: "white",
    font: "Space Grotesk",
    fontWeight: 800,
    boxShadow: "1px -1px 4px  #212121",
    transform: "translateY(-2px) ",

    "&:hover": {
      boxShadow: "1px -1px 3px  #212121 ",
      backgroundColor: "#fff",
    },

    "&:active": {
      transform: "translateY(0px) ",
      boxShadow: "1px -1px 2px  #212121",
    },

    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    fontFamily: "Space Grotesk",
  }));

  return (
    <Grid
      key={keyboardLetter}
      container
      justifyContent={"center"}
      alignItems={"center"}
      spacing={0}
      sx={{
        aspectRatio: 1 / 1,
      }}
      xs={1.3}
      sm={1.7}
      md={2}
    >
      <Box
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        sx={{
          borderRadius: 1,
          minWidth: { xs: "32px", sm: "45px" },
          minHeight: { xs: "32px", sm: "45px" },
          backgroundColor: "#000",
          padding: "0",
          width: { xs: "33px", sm: "47px" },
          height: { xs: "33px", sm: "47px" },
        }}
      >
        <KeyBoardButton
          value={keyboardLetter}
          onClick={click}
          disabled={guessed}
          sx={{
            minWidth: { xs: "32px", sm: "45px" },
            width: { xs: "32px", sm: "45px" },
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        >
          {right && (
            <CheckCircleIcon
              fontSize="small"
              sx={{
                color: "green",
                position: "absolute",
                p: 0,
                m: 0,
                fontWeight: 800,
                left: 0,
                top: 0,
              }}
            />
          )}
          {wrong && (
            <CancelIcon
              fontSize="small"
              sx={{
                color: "red",
                position: "absolute",
                p: 0,
                m: 0,
                fontWeight: 800,
                left: 0,
                top: 0,
              }}
            />
          )}
          {keyboardLetter}
        </KeyBoardButton>
      </Box>
    </Grid>
  );
};
