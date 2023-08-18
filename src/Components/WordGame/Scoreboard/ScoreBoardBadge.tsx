import { ReactElement } from "react";
import Badge from "@mui/material/Badge";

export interface Props {
  children: ReactElement;
}
export const ScoreBoardBadge = ({ children }: Props) => {
  return (
    <Badge color={"primary"} badgeContent={"New High Score!"}>
      {children}
    </Badge>
  );
};
