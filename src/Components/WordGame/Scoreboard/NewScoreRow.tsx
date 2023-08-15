import { ReactElement } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface Props {
  newScore: userScore;
  children: ReactElement;
}

export const NewScoreRow = ({ newScore, children }: Props) => {
  return (
    <TableRow>
      <TableCell
        component="th"
        scope="row"
        align="center"
        sx={{ textAlign: "center" }}
      >
        {children}
      </TableCell>
      <TableCell style={{}} align="center">
        {newScore.score}
      </TableCell>
      <TableCell style={{}} align="center">
        {newScore.word}
      </TableCell>
      <TableCell style={{}} align="center">
        {newScore.gameDate}
      </TableCell>
    </TableRow>
  );
};
