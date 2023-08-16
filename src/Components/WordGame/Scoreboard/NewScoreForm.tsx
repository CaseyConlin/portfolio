import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { lightGreen, grey } from "@mui/material/colors";

interface Props {
  changeHandler: (name: string) => void;
  registerScore: () => void;
  name: string;
}

const ScoreTextField = styled(TextField)`
  & input {
    color: ${lightGreen["A400"]};
    text-align: center;
    text-transform: uppercase;
  }
  & label.Mui-focused {
    color: ${lightGreen["A400"]};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${lightGreen["A400"]};
    }
    &:hover fieldset {
      border-color: ${lightGreen["A400"]};
    }
    &.Mui-focused fieldset {
      border-color: ${lightGreen["A400"]};
    }
  }
`;

export const NewScoreForm = ({ registerScore, changeHandler, name }: Props) => {
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerScore();
  };

  return (
    <Box
      component="form"
      sx={{
        mb: 0,
        pb: 0,
        "& > :not(style)": { m: 1 },
        // pl: "3rem",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <ScoreTextField
        sx={{
          width: "5rem",
        }}
        required
        margin="none"
        size="small"
        label="Initials"
        variant="outlined"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          changeHandler(event.target.value);
        }}
        inputProps={{ maxLength: 3 }}
        InputLabelProps={{
          style: { color: "inherit" },
        }}
      ></ScoreTextField>
      <Button
        disabled={name.length === 0}
        type="submit"
        sx={{
          m: "0px",
          p: "0px",
          color: lightGreen["A400"],
          background: grey[900],
          border: `1px ${lightGreen["A400"]} solid`,
          "&:hover": {
            background: lightGreen["A400"],
            color: grey[900],
          },
          "&:disabled": {
            color: lightGreen[700],
          },
        }}
        size="small"
      >
        Submit
      </Button>
    </Box>
  );
};
