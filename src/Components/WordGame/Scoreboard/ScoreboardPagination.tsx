import TablePagination from "@mui/material/TablePagination";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
export interface Props {
  rows: userScore[];
}

export interface Props {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

export const ScoreboardPagination = ({ rows }: Props) => {
  function TablePaginationActions(props: Props) {
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          <FirstPageIcon />
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          <LastPageIcon />
        </IconButton>
      </Box>
    );
  }

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
      component="div"
      colSpan={3}
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        inputProps: {
          "aria-label": "rows per page",
        },
        native: true,
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
    />
  );
};
