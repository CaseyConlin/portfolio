import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

interface Props {
  changeHandler: (name: string) => void;
  registerScore: () => void;
  newScore: userScore;
}

export const NewScoreForm = ({
  registerScore,
  changeHandler,
  newScore,
}: Props) => {
  function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    registerScore();
  }

  const green = lightGreen["A400"];
  const ScoreTextField = styled(TextField)`
    & label.Mui-focused {
      color: #76ff03;
    }
    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: #76ff03;
      }
      &:hover fieldset {
        border-color: #76ff03;
      }
      &.Mui-focused fieldset {
        border-color: #76ff03;
      }
    }
  `;

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        pl: "3rem",
        color: lightGreen["A400"],
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <ScoreTextField
        sx={{
          color: lightGreen["A400"],
          width: "5rem",

          input: {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "yellow",
            },
            textAlign: "center",
            textTransform: "uppercase",

            color: lightGreen["A400"],
            "&::placeholder": {
              color: "inherit",
            },
          },
        }}
        required
        margin="none"
        size="small"
        label="Initials"
        variant="outlined"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          changeHandler(event.target.value);
        }}
        inputProps={{ maxLength: 3 }}
        InputLabelProps={{
          style: { color: "inherit" },
        }}
      ></ScoreTextField>
      <IconButton
        disabled={newScore.name.length === 0}
        sx={{ mx: "0px", px: "0px" }}
      >
        <CheckCircleIcon sx={{ mx: "0rem", px: "0rem" }} />
      </IconButton>
    </Box>
  );
};
