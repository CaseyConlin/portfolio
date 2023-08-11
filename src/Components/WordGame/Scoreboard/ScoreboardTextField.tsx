import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export const ScoreTextField = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "8rem" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{
          input: { textAlign: "center" },
        }}
        id="outlined-basic"
        label="Enter Initials"
        variant="outlined"
      />
    </Box>
  );
};
