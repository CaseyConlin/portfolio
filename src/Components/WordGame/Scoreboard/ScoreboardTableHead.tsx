import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

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
    <TableHead>
      <TableRow>
        {headings.map((heading) => (
          <TableCell
            key={heading.id}
            style={{ minWidth: heading.minWidth, textAlign: "center" }}
          >
            {heading.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
