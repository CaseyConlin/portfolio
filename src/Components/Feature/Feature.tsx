import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NewTabIcon } from "./NewTabIcon";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { GitHub } from "@mui/icons-material";
import { ChipsArray } from "./Chips";
import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

export interface Props {
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
}: Props) => {
  const videoEl = useRef(null);

  return (
    <Box
      boxShadow={5}
      my={4}
      sx={{
        backgroundColor: isImageRight ? grey[800] : grey[200],
        color: isImageRight ? "white" : "black",
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
              fontSize={{ xs: "3xl", sm: "4xl", md: "5xl" }}
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
            order={{ md: isImageRight ? 1 : 0 }}
          >
            <Box textAlign={"left"}>
              <Typography fontSize="1.125rem" mt={2} mb={3}>
                {description}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  size="large"
                  variant="contained"
                  color="buttonFeature"
                  endIcon={<NewTabIcon fontSize="small" />}
                  sx={{ fontWeight: 600, textTransform: "none" }}
                  href={url}
                  target="_blank"
                >
                  {cta}
                </Button>
                {repo && (
                  <Button
                    size="large"
                    variant="outlined"
                    color={isImageRight ? "inherit" : "buttonFeature"}
                    endIcon={<GitHub fontSize="small" />}
                    sx={{ fontWeight: 600, textTransform: "none" }}
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
            <Box>
              <video
                style={{
                  maxWidth: "100%",
                  borderRadius: 5,
                  boxShadow: "-3px 2px 10px #000000bc, -5px 3px 5px #00000094",
                }}
                autoPlay
                playsInline
                controls
                loop
                muted
                ref={videoEl}
                src={videoSource}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
