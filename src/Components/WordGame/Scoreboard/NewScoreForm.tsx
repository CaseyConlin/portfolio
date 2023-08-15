import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";

interface Props {
  registerScore: () => void;
}
// Type '(e: React.MouseEvent<HTMLFormElement>) => void' is not assignable to type 'Promise<any>'.

export const NewScoreForm = ({ registerScore }: Props) => {
  function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    registerScore();
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },

        pl: "3rem",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{
          width: "5rem",
          input: { textAlign: "center" },
        }}
        required
        margin="none"
        size="small"
        id="outlined-basic"
        label="Initials"
        variant="outlined"
        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment
        //       position="end"
        //       sx={{ position: "absolute", left: "4.5rem" }}
        //     ></InputAdornment>
        //   ),
        // }}
      ></TextField>
      <IconButton
        // disable ={}
        sx={{ mx: "0px", px: "0px" }}
      >
        <CheckCircleIcon sx={{ mx: "0rem", px: "0rem" }} />
      </IconButton>
    </Box>
  );
};
