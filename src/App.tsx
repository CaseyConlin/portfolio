//Provide MUI context to compoents in app.
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { WordGame } from "./Components/WordGame/WordGameContainer";
import { Navbar } from "./Components/Navbar";
import { Feature } from "./Components/Feature/Feature";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <WordGame />
        <h2>Selected Work</h2>
        <Feature
          title="Parkcrest Design"
          description="Thomsen Painting's website provides a polished digital presence that matches and highlights the business’s extensive work and expertise in interior and exterior painting as well as hardwood furniture and historical property restoration. The site features subtle animation elements custom-developed to match branding coupled with a clean look that allows visitors to easily navigate the site and find the services available from Thomsen Painting. The navigation and site structure also provide SEO benefits as search engine crawlers can easily index and surface the site using keywords and structure in portfolio categories and portfolio projects listed on the site. The site also features an up-to-date feed for Thomsen’s Paintings healthy and engaging Instagram profile. The site uses the WordPress CMS to allow easy editing of the site content and pages."
          cta="See it live!"
          url="https://www.parkcrestdesign.com/"
          repo="https://github.com/CaseyConlin/parkcrestdesign"
          videoSource="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
          techItems={{
            techItems: [
              "React",
              "Tailwind",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "Sass",
              "React Spring",
            ],
          }}
        />
        <Feature
          isImageRight={true}
          title="FFANY's Website to Support Intellectual Freedom"
          description="Free For All: New Yorkers for Intellectual Freedom is an organization committed to supporting intellectual freedom by providing resources to combat censorship to library professionals and community members. The site provides animation and layout for an engaging experience that draws visitors in, with intuitive pathways and a mega menu to guide visitors to content to meet their goals, and SEO-friendly composition and descriptions ensure organic reach for the site. The site is mobile-responsive, and includes structural and design elements that create a more accessible experience for people of all abilities including size, layout, and contrast to meet WCAG and reduced motion settings based on user local settings. User experience and SEO are further boosted by the site’s fast load time as measured by Lighthouse at 99 for desktop performance and 94 on mobile before image compression. The site uses the WordPress CMS to allow easy editing to the site content and pages."
          cta="Check it out!"
          url="https://freeforallny.org/"
          videoSource="https://embed-ssl.wistia.com/deliveries/405b909f1776ba722fdbba200ee8fca834d62ede/file.mp4"
          techItems={{
            techItems: [
              "React",
              "Bootstrap",
              "PHP",
              "Sass",
              "WordPress",
              "PHP",
              "JavaScript",
              "Figma",
            ],
          }}
        />
        <Feature
          title="Lift_ff"
          description="Thomsen Painting's website provides a polished digital presence that matches and highlights the business’s extensive work and expertise in interior and exterior painting as well as hardwood furniture and historical property restoration. The site features subtle animation elements custom-developed to match branding coupled with a clean look that allows visitors to easily navigate the site and find the services available from Thomsen Painting. The navigation and site structure also provide SEO benefits as search engine crawlers can easily index and surface the site using keywords and structure in portfolio categories and portfolio projects listed on the site. The site also features an up-to-date feed for Thomsen’s Paintings healthy and engaging Instagram profile. The site uses the WordPress CMS to allow easy editing of the site content and pages."
          cta="See it live!"
          url="https://www.parkcrestdesign.com/"
          repo="https://github.com/CaseyConlin/portfolio/tree/main/src/WordGameContext"
          videoSource="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
          techItems={{
            techItems: [
              "React",
              "JavaScript",
              "TypeScript",
              "Framer Motion",
              "Material UI",
            ],
          }}
        />
        <Feature
          isImageRight={true}
          title="Clean Lines and Strong SEO for a Painting Contractor"
          description="Thomsen Painting's website provides a polished digital presence that matches and highlights the business’s extensive work and expertise in interior and exterior painting as well as hardwood furniture and historical property restoration. The site features subtle animation elements custom-developed to match branding coupled with a clean look that allows visitors to easily navigate the site and find the services available from Thomsen Painting. The navigation and site structure also provide SEO benefits as search engine crawlers can easily index and surface the site using keywords and structure in portfolio categories and portfolio projects listed on the site. The site also features an up-to-date feed for Thomsen’s Paintings healthy and engaging Instagram profile. The site uses the WordPress CMS to allow easy editing of the site content and pages."
          cta="See it live!"
          url="https://thomsenpainting.com/"
          videoSource="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
          techItems={{
            techItems: [
              "React",
              "Bootstrap",
              "Sass",
              "WordPress",
              "PHP",
              "JavaScript",
            ],
          }}
        />

        <Feature
          title="Pokédex"
          description="The Pokédex App fetches and renders Pokédemon data from the PokeAPI. The app is built with React using Typescript and styled with Stitches CSS-in-JS. Tests use Jest and MSW. The app includes lazy loading with the intersection observer API, pagination, and search with type ahead search suggestions."
          cta="Let's Go!"
          url="https://startling-druid-3c5925.netlify.app/"
          videoSource="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
          repo="https://github.com/Parkcrest/Pokedex"
          techItems={{
            techItems: [
              "React",
              "TypeScript",
              "JavaScript",
              "Stitches",
              "Jest",
              "API",
            ],
          }}
        />
        <Feature
          isImageRight={true}
          title="petConnect"
          url="https://petconnect.parkcrest.dev/"
          description={`petConnect is a demo fullstack MERN application that allows you to to shop for and adopt your next pet. On the backend Node.js, Express, and Mongoose communicate with collections on MongoDB. The Pet API handles filtering and sorting pets results based on client search params. The Authentication API handles registering users and authenticating users using HTTP-only cookies and JWT. The backend also processes payments using Stripe's API via the Checkout page. On the frontend, React provides the UI, and builds search params and calls to the API. The shopping basket / cart is managed as state using React context in browser local storage. The total cost is transmitted to the backend for processing through Stripe at checkout. Routing is handled clientside by React Router, with the useLoaderData hook making API calls where possible. User authentication state is managed with another React context.   
            The app is styled with Tailwind and uses Typescript.`}
          cta="See it live right meow"
          repo="https://github.com/CaseyConlin/MERN-Full-Stack-Pet-Adoption-App"
          videoSource="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
          techItems={{
            techItems: [
              "React",
              "TypeScript",
              "JavaScript",
              "Sass",
              "Tailwind",
              "Node.js",
              "Express.js",
              "MongoDB",
              "API",
              "DigitalOcean",
            ],
          }}
        />
        <Feature
          title="Weather App"
          url="https://weather-app-crc.netlify.app/"
          description="The app displays forecast data for today and seven days out in a responsive layout using Open Weather Map API."
          cta="See it live!"
          videoSource="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
          repo="https://github.com/CaseyConlin/react-weather-app"
          techItems={{
            techItems: ["React", "CSS", "JavaScript", "API"],
          }}
        />
        <Feature
          isImageRight={true}
          title="A Modern Calendar That Exposes Event Data to Meet Google's Structured Data Schema"
          description="The Stone Ridge Library’s calendar features a mobile-first design and layout with desktop views and interfaces to facilitate staff tasks related to searching for and registering library users for events. The site allows users to easily search for events by keyword, date, and audience, and provides event information presented according to Google’s structured data schema to support SEO discovery of events. Users searching areas and events in areas are presented with the library’s events thanks to this structured data. Users register for online and in-person events on the calendar and receive reminder emails, and library staff receive information about registration by email and up-to-date info is available on the WordPress backend of the website."
          cta="See it live!"
          url="https://stoneridgelibrary.org/events/"
          videoSource="https://embed-ssl.wistia.com/deliveries/7f7ab82fbbffb91bc1bd4cb45ebbf68c427b11e8/file.mp4"
          techItems={{
            techItems: ["React", "CSS", "JavaScript", "PHP", "MySQL"],
          }}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
