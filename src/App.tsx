import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { SectionHeading } from "./Components/SectionHeading";
import { WordGame } from "./Components/WordGame/WordGameContainer";
import { Navbar } from "./Components/Navbar";
import { Feature } from "./Components/Feature/Feature";
import { ContactCard } from "./Components/Contact/ContactComponent";
import { Footer } from "./Components/Footer";

import { sites } from "./data/sites";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <WordGame />
        <SectionHeading headingText="About Me" id="about" marginOffset={-2.5} />
        <ContactCard />

        <SectionHeading
          headingText="Selected Work"
          id="works"
          marginOffset={-6.5}
        />
        {sites &&
          sites.map((site, i) => {
            return (
              <Feature
                title={site.title}
                description={site.description}
                cta={site.cta}
                url={site.url}
                repo={site.repo}
                videoSource={site.videoSource}
                isImageRight={i % 2 != 0}
                techItems={site.techItems}
              />
            );
          })}

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
