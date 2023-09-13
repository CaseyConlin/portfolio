import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { lightGreen } from "@mui/material/colors";

export interface Heading {
  id: string;
  minWidth: number;
  label: string;
}
export interface Props {
  headings: Heading[];
}

export const ScoreboardTableHead = ({ headings }: Props) => {
  return (
    <TableHead
      sx={{
        backgroundColor: "inherit",
        color: "inherit",
      }}
    >
      <TableRow
        sx={{
          backgroundColor: "inherit",
          color: "inherit",
        }}
      >
        {headings.map((heading) => (
          <TableCell
            style={{ textAlign: "center", width: heading.minWidth }}
            key={heading.id}
            sx={{
              backgroundColor: "inherit",
              color: "inherit",
              fontWeight: 700,
              fontSize: "1.25rem",
              borderBottomColor: lightGreen["A400"],
            }}
          >
            {heading.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
