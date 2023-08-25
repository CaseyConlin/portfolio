import { useState, ReactElement } from "react";
import { ScoreboardTableHead } from "./ScoreboardTableHead";
import { Heading } from "./ScoreboardTableHead";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export interface Props {
  headings: Heading[];
  scores?: userScore[] | undefined;
  children?: ReactElement | ReactElement[];
}

export const ScoreboardTable = ({ headings, scores, children }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    event;
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  //   const rows = scores && scores.sort((a, b) => (a.score > b.score ? -1 : 1));
  const rows =
    scores && scores.sort((a, b) => (a.rankForScore > b.rankForScore ? 1 : -1));

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    rows && page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Paper
      elevation={0}
      sx={{ mx: "auto", backgroundColor: "inherit", color: "inherit" }}
    >
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "inherit",
          color: "inherit",
          fontSize: "inherit",
          borderBottom: "none",
          boxShadow: 0,
        }}
      >
        <Table
          sx={{
            backgroundColor: "inherit",
            color: "inherit",
            fontSize: "inherit",
          }}
          style={{ width: "auto", tableLayout: "fixed" }}
          className="scores-table"
          aria-label="high scores table"
        >
          <ScoreboardTableHead headings={headings} />
          {children}

          {rows && (
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((score, index) => (
                <TableRow
                  key={score.name + index}
                  sx={{ textTransform: "uppercase" }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    style={{ width: "50px" }}
                    sx={{
                      textAlign: "center",
                      color: "inherit",
                      fontSize: "inherit",
                      borderBottom: "none",
                    }}
                  >
                    {score.rankForScore}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "inherit",
                      fontSize: "inherit",
                      borderBottom: "none",
                    }}
                    align="center"
                  >
                    {score.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "inherit",
                      fontSize: "inherit",
                      borderBottom: "none",
                    }}
                    align="center"
                  >
                    {score.score}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "inherit",
                      fontSize: "inherit",
                      borderBottom: "none",
                    }}
                    align="center"
                  >
                    {score.word}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      color: "inherit",
                      fontSize: "inherit",
                      borderBottom: "none",
                    }}
                    align="center"
                  >
                    {new Date(score.gameDate).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {scores && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          sx={{ mb: 10, color: "inherit" }}
          count={rows ? rows.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};
