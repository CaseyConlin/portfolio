import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { lightGreen, grey } from "@mui/material/colors";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  changeHandler: (name: string) => void;
  registerScore: () => void;
  name: string;
}

const ScoreTextField = styled(TextField)`
  & input {
    color: ${grey[900]};
    text-align: center;
    text-transform: uppercase;
  }
  & label.Mui-focused {
    color: ${grey[900]};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${grey[900]};
    }
    &:hover fieldset {
      border-color: ${grey[900]};
    }
    &.Mui-focused fieldset {
      border-color: ${grey[900]};
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
        // "& > :not(style)": { m: 1 },
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
        autoFocus
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          changeHandler(event.target.value);
        }}
        inputProps={{ maxLength: 3 }}
        InputLabelProps={{
          style: { color: "inherit" },
        }}
      ></ScoreTextField>
      <Box
        component={"div"}
        display={"flex"}
        justifyContent={"space-around"}
        mt={1}
      >
        <Tooltip title="Submit">
          <span>
            <IconButton
              disabled={name.length === 0}
              type="submit"
              sx={{
                width: "25px",
                height: "25px",
                // background: grey[900],
                // color: lightGreen["A400"],
                // border: `${lightGreen["A400"]} 1px solid`,
                border: `${grey[900]} 1px solid`,
                background: lightGreen["A400"],
                color: grey[900],

                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "all 0.3s ease",
                  // background: grey[900],
                  // color: lightGreen["A400"],
                  // border: `${lightGreen["A400"]} 1px solid`,

                  // border: `${grey[900]} 1px solid`,
                  // background: lightGreen["A400"],
                  // color: grey[900],
                },
                "&:disabled": {
                  // color: grey[500],
                  // backgroundColor: grey[900],
                  background: lightGreen[900],
                  color: lightGreen["A400"],
                  border: `${lightGreen["A400"]} 1px solid`,
                },
              }}
            >
              <RocketLaunchIcon sx={{ m: 0 }} fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Cancel" sx={{ background: "#000" }}>
          <IconButton
            sx={{
              width: "25px",
              height: "25px",
              // background: grey[900],
              // color: lightGreen["A400"],
              // border: `${lightGreen["A400"]} 1px solid`,
              border: `${grey[900]} 1px solid`,
              background: lightGreen["A400"],
              color: grey[900],

              "&:hover": {
                transform: "scale(1.1)",
                transition: "all 0.3s ease",
                // background: grey[900],
                // color: lightGreen["A400"],
                // border: `${lightGreen["A400"]} 1px solid`,

                // border: `${grey[900]} 1px solid`,
                // background: lightGreen["A400"],
                // color: grey[900],
              },
              "&:disabled": {
                color: grey[500],
                backgroundColor: grey[900],
              },
            }}
          >
            <ClearIcon sx={{ m: 0 }} fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* <Button
        disabled={name.length === 0}
        type="submit"
        sx={{
          m: "0px",
          p: "0px",
          color: grey[900],
          background: lightGreen["A400"],
          border: `1px ${grey[900]} solid`,
          "&:hover": {
            background: grey[900],
            color: lightGreen["A400"],
          },
          "&:disabled": {
            color: grey[900],
          },
        }}
        size="small"
      >
        Submit
      </Button> */}
    </Box>
  );
};
