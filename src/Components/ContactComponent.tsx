import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import CardActions from "@mui/material/CardActions";
export const ContactCard = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Card raised sx={{ display: "flex" }}>
        <Grid container my={3} justifyContent="center" xs={12} lg={12}>
          <Grid
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "green",
            }}
          >
            <CardContent>
              <Typography
                id="about"
                fontSize={{ xs: "2xl", sm: "3xl", md: "7xl" }}
                fontWeight={900}
                variant="h2"
              >
                About Me
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                component="div"
              >
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            >
              <IconButton
                aria-label="email address"
                href="mailto:casey.conlin@gmail.com"
                target="_blank"
              >
                <Email />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com/in/CaseyConlin/"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                aria-label="Github"
                href="https://github.com/CaseyConlin/"
                target="_blank"
              >
                <GitHub />
              </IconButton>
            </CardActions>
          </Grid>
          <Grid xs={12} md={5}>
            <CardMedia
              component="img"
              sx={{ objectFit: "cover", width: "100%", height: "100%" }}
              image="/IMG_2020.jpeg"
              alt="Casey Conlin"
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
