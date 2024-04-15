import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NewTabIcon } from "./NewTabIcon";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import { GitHub } from "@mui/icons-material";
import { ChipsArray } from "./Chips";
import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { red } from "@mui/material/colors/";

export interface FeatureProps {
  decorative?: string;
  title: string;
  description: string;
  cta: string;
  url: string;
  repo?: string;
  videoSource: string;
  isImageRight?: boolean;
  techItems: TechItems;
}
export const Feature = ({
  title,
  description,
  cta,
  url,
  repo,
  isImageRight,
  videoSource,
  techItems,
}: FeatureProps) => {
  const videoEl = useRef(null);

  return (
    <Box
      boxShadow={5}
      my={4}
      sx={{
        backgroundColor: isImageRight ? grey[800] : grey[200],
        color: isImageRight ? "#fff" : "#000",
        zIndex: 100,
        position: "relative",
      }}
    >
      <Container sx={{ p: { xs: 1, md: 2 } }} maxWidth="xl">
        <Grid container py={{ xs: 1, md: 5 }}>
          <Grid xs={12} px={{ xs: 1, md: 2 }}>
            <Typography
              variant="h3"
              display="block"
              fontSize={{ xs: "2rem", sm: "4xl", md: "5xl" }}
              fontWeight={800}
            >
              {title}
            </Typography>
            <ChipsArray techItems={techItems.techItems} />
          </Grid>
          <Grid
            container
            xs={12}
            md={6}
            px={{ xs: 1, md: 2 }}
            order={{ xs: 1, md: isImageRight ? 1 : 0 }}
          >
            <Box textAlign={"left"}>
              <Typography
                fontSize="1.125rem"
                mt={2}
                mb={3}
                data-testid={"test-description"}
              >
                {description}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<NewTabIcon fontSize="small" />}
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    color: "#fff",
                    backgroundColor: red[500],
                  }}
                  href={url}
                  target="_blank"
                >
                  {cta}
                </Button>
                {repo && (
                  <Button
                    size="large"
                    variant="outlined"
                    // color={isImageRight ? "inherit" : "buttonFeature"}
                    endIcon={<GitHub fontSize="small" />}
                    sx={{
                      fontWeight: 600,
                      textTransform: "none",
                      borderColor: isImageRight ? "inherit" : red[500],
                      backgroundColor: isImageRight ? "inherit" : "",
                      color: isImageRight ? "inherit" : "red",
                      "&:hover": {
                        borderColor: red[900],
                        color: isImageRight ? red["A200"] : "inherit",
                      },
                    }}
                    href={repo}
                    target="_blank"
                  >
                    See the Repo
                  </Button>
                )}
              </Stack>
            </Box>
          </Grid>
          <Grid container xs={12} md={6} p={{ xs: 1, md: 2 }}>
            <Box sx={{ display: "grid", alignItems: "center" }}>
              <CardMedia
                component="video"
                sx={{
                  width: { xs: "100%", sm: "75%", md: "100%" },
                  mx: "auto",
                  borderRadius: "4px",
                }}
                autoPlay
                playsInline
                controls
                loop
                muted
                ref={videoEl}
                src={videoSource}
                data-testid="screenshot-video"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
