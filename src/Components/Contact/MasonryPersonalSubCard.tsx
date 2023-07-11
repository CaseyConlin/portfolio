import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ConstructionIcon from "@mui/icons-material/Construction";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import PetsIcon from "@mui/icons-material/Pets";
import { red } from "@mui/material/colors";

export interface Props {
  height: number;
}
export const MasonryPersonalCard = ({ height }: Props) => {
  const theme = useTheme();

  return (
    <Card
      raised
      sx={{
        display: "flex",
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        flexDirection: "column",
        justifyContent: "space-between",
        height: `${height.toString()}px`,
        transform: "rotate(2deg)",
      }}
    >
      <CardContent>
        <Typography id="about" fontWeight={900} variant="h4" color={red[500]}>
          <AutoAwesomeIcon /> Misc.
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          component="p"
          lineHeight={1.3}
        >
          I love programming, but when I'm not at a computer I like to...
        </Typography>
        <List sx={{ mx: -2, pr: 1, pb: 1 }}>
          <ListItem disablePadding>
            <ListItemIcon sx={{ justifyContent: "space-evenly" }}>
              <PedalBikeIcon sx={{ color: red[600] }} />
            </ListItemIcon>
            <ListItemText primary="Ride bikes" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ justifyContent: "space-evenly" }}>
              <PetsIcon sx={{ color: red[600] }} />
            </ListItemIcon>
            <ListItemText primary="Spend time with my family including our many, many pets" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon sx={{ justifyContent: "space-evenly" }}>
              <ConstructionIcon sx={{ color: red[600] }} />
            </ListItemIcon>
            <ListItemText primary="Fix stuff" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
