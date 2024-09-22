import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import {
  postNewScore,
  setPlayerName,
  fetchScores,
} from "../../../features/wordGame/wordGameSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { lightGreen, grey } from "@mui/material/colors";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Tooltip from "@mui/material/Tooltip";

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

export const NewScoreForm = () => {
  const newScore = useSelector((state: RootState) => state.wordGame.newScore);
  const newScoreMessage = useSelector(
    (state: RootState) => state.wordGame.newScoreMessage
  );

  const name = useSelector(
    (state: RootState) =>
      state.wordGame.newScore && state.wordGame.newScore.name
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    newScore &&
      (await dispatch(postNewScore()).then(() => dispatch(fetchScores())));
  };

  return (
    <Box
      component="form"
      sx={{
        mb: 0,
        pb: 0,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <ScoreTextField
        sx={{
          width: "5rem",
        }}
        disabled={newScoreMessage ? newScoreMessage.length > 1 : false}
        required
        margin="none"
        size="small"
        label="Initials"
        variant="outlined"
        autoFocus
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setPlayerName(event.target.value));
        }}
        inputProps={{ maxLength: 3 }}
        InputLabelProps={{
          style: { color: "inherit" },
        }}
      ></ScoreTextField>
      {!newScoreMessage && (
        <Box
          component={"div"}
          display={"flex"}
          justifyContent={"space-around"}
          mt={1}
        >
          <Tooltip title="Submit">
            <span>
              <IconButton
                disabled={
                  !newScore ||
                  !name ||
                  name === "" ||
                  (newScoreMessage && newScoreMessage.length > 1)
                    ? true
                    : false
                }
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
                  },
                  "&:disabled": {
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
            <span>
              <IconButton
                disabled={
                  !newScore ||
                  !name ||
                  name === "" ||
                  (newScoreMessage && newScoreMessage.length > 1)
                    ? true
                    : false
                }
                onClick={() => {
                  dispatch(setPlayerName(""));
                }}
                sx={{
                  width: "25px",
                  height: "25px",
                  border: `${grey[900]} 1px solid`,
                  background: lightGreen["A400"],
                  color: grey[900],

                  "&:hover": {
                    transform: "scale(1.1)",
                    transition: "all 0.3s ease",
                  },
                  "&:disabled": {
                    background: lightGreen[900],
                    color: lightGreen["A400"],
                    border: `${lightGreen["A400"]} 1px solid`,
                  },
                }}
              >
                <ClearIcon sx={{ m: 0 }} fontSize="small" />
              </IconButton>
            </span>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};
