import { ReactElement } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface Props {
  newScore: userScore;
  children: ReactElement;
}

export const NewScoreRow = ({ newScore, children }: Props) => {
  return (
    <TableRow sx={{ color: "inherit" }}>
      <TableCell
        component="th"
        scope="row"
        align="center"
        sx={{ textAlign: "center", color: "inherit" }}
      ></TableCell>
      <TableCell style={{ color: "inherit" }} align="center">
        {children}
      </TableCell>
      <TableCell style={{ color: "inherit" }} align="center">
        {newScore.score}
      </TableCell>
      <TableCell style={{ color: "inherit" }} align="center">
        {newScore.word}
      </TableCell>
      <TableCell style={{ color: "inherit" }} align="center">
        {newScore.gameDate}
      </TableCell>
    </TableRow>
  );
};
