import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";

export const SecretWordContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ p: { xs: 0 }, mx: -2, justifyContent: "center" }}>
      {children}
    </Box>
  );
};
