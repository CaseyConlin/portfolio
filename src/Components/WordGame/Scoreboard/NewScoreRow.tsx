import { ReactElement } from "react";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { headings } from "./headings";
import Box from "@mui/material/Box";
import { ScoreboardTable } from "./ScoreboardTable";
import { lightGreen, grey } from "@mui/material/colors";
import { TableBody } from "@mui/material";
import Zoom from "@mui/material/Zoom";

interface Props {
  newScore: userScore;
  newScoreMessage: string | undefined;
  children: ReactElement;
}

export const NewScoreRow = ({ newScore, newScoreMessage, children }: Props) => {
  return (
    <Paper sx={{ py: 5, mx: "auto", background: lightGreen["A400"] }}>
      <Box>
        <Box
          sx={{
            mx: "auto",
            my: 2,
            background: lightGreen["A400"],
            color: grey[900],
            borderBottomColor: lightGreen["A400"],
            fontSize: "1.5rem",
            width: "auto",
            textAlign: "center",
          }}
        >
          <b>New High Score</b>
          <br />
          <Box component="span" sx={{ fontSize: "1rem" }}>
            Enter Your Initials Below
          </Box>
        </Box>
      </Box>
      <ScoreboardTable headings={headings}>
        <TableBody>
          <TableRow
            sx={{
              background: lightGreen["A400"],
              color: grey[900],
              borderBottomColor: lightGreen["A400"],
              verticalAlign: "top",
            }}
          >
            <TableCell
              component="th"
              scope="row"
              align="center"
              sx={{
                textAlign: "center",
                color: grey[900],
                borderBottomColor: lightGreen["A400"],
              }}
            >
              {newScore.rankForScore}
            </TableCell>
            <TableCell
              style={{
                color: grey[900],
                borderBottomColor: lightGreen["A400"],
              }}
              align="center"
            >
              {children}
            </TableCell>
            <TableCell
              style={{
                color: grey[900],
                borderBottomColor: lightGreen["A400"],
              }}
              align="center"
            >
              {newScore.score}
            </TableCell>
            <TableCell
              style={{
                color: grey[900],
                borderBottomColor: lightGreen["A400"],
              }}
              align="center"
            >
              {newScore.word}
            </TableCell>
            <TableCell
              style={{
                color: grey[900],
                borderBottomColor: lightGreen["A400"],
              }}
              align="center"
            >
              {newScore.gameDate}
            </TableCell>
          </TableRow>
        </TableBody>
      </ScoreboardTable>
      {newScoreMessage && (
        <Zoom in={newScoreMessage.length > 1}>
          <Box
            sx={{
              mx: "auto",
              my: 0,
              background: lightGreen["A400"],
              color: grey[900],
              borderBottomColor: lightGreen["A400"],
              fontSize: "1.25rem",
              fontWeight: 700,
              width: "auto",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {newScoreMessage}
          </Box>
        </Zoom>
      )}
    </Paper>
  );
};
