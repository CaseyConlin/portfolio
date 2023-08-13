import { ReactElement, useState } from "react";
import { ScoreboardTableHead } from "./ScoreboardTableHead";
import Table from "@mui/material/Table";
// import { TableHead } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { TablePagination } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Heading } from "./ScoreboardTableHead";

// interface Column {
//   id: "name" | "score" | "word" | "date";
//   label: string;
//   minWidth?: number;
//   align?: "right";
//   format?: (value: Date) => string;
// }

// const columns: readonly Column[] = [
//   { id: "name", label: "Name", minWidth: 50 },
//   { id: "score", label: "Score", minWidth: 50 },
//   { id: "word", label: "Word", minWidth: 50 },
//   {
//     id: "date",
//     label: "Date",
//     minWidth: 50,
//     align: "right",
//     format: (value: Date) => value.toLocaleString("en-US"),
//   },
// ];

export interface Props {
  headings: Heading[];
  scores: userScore[] | undefined;
  //   children: ReactElement | ReactElement[];
}

export const ScoreboardTable = ({ headings, scores }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const rows = scores && scores.sort((a, b) => (a.score > b.score ? -1 : 1));
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    rows && page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 500,
          }}
          className="scores-table"
          aria-label="custom pagination table"
          stickyHeader
        >
          <ScoreboardTableHead headings={headings} />
          {/* <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead> */}
          {rows && (
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((score) => (
                <TableRow key={score.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ textAlign: "center" }}
                  >
                    {score.name}
                  </TableCell>
                  <TableCell style={{}} align="center">
                    {score.score}
                  </TableCell>
                  <TableCell style={{}} align="center">
                    {score.word}
                  </TableCell>
                  <TableCell style={{}} align="center">
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        sx={{ mb: 10 }}
        count={rows ? rows.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
