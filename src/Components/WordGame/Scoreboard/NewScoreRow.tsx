import { ReactElement } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { lightGreen } from "@mui/material/colors";

interface Props {
  newScore: userScore;
  children: ReactElement;
}

export const NewScoreRow = ({ newScore, children }: Props) => {
  return (
    <TableRow sx={{ color: "inherit", borderBottomColor: lightGreen["A400"] }}>
      <TableCell
        component="th"
        scope="row"
        align="center"
        sx={{
          textAlign: "center",
          color: "inherit",
          borderBottomColor: lightGreen["A400"],
        }}
      ></TableCell>
      <TableCell
        style={{ color: "inherit", borderBottomColor: lightGreen["A400"] }}
        align="center"
      >
        {children}
      </TableCell>
      <TableCell
        style={{ color: "inherit", borderBottomColor: lightGreen["A400"] }}
        align="center"
      >
        {newScore.score}
      </TableCell>
      <TableCell
        style={{ color: "inherit", borderBottomColor: lightGreen["A400"] }}
        align="center"
      >
        {newScore.word}
      </TableCell>
      <TableCell
        style={{ color: "inherit", borderBottomColor: lightGreen["A400"] }}
        align="center"
      >
        {newScore.gameDate}
      </TableCell>
    </TableRow>
  );
};
