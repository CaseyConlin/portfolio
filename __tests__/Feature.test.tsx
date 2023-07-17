import React from "react";
import { Feature } from "../src/Components/Feature/Feature";
import { it, describe, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import "intersection-observer";

beforeEach(() => {
  render(
    <Feature
      title="Headline Title"
      description="Props description."
      cta="CTA!"
      url="https://www.parkcrestdesign.com/"
      repo="https://github.com/CaseyConlin/parkcrestdesign"
      videoSource="https://embed-ssl.wistia.com/deliveries/8b0214f426735ce77d32b78f20e80114e977ca3a/file.mp4"
      techItems={{ techItems: ["React", "Tailwind"] }}
    />
  );
});
describe("<Feature />", () => {
  it("Renders Feature headline prop.", () => {
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading.textContent).toBe("Headline Title");
  });
  it("Renders Feature description prop.", () => {
    const description = screen.getByTestId("test-description");
    expect(description.textContent).toBe("Props description.");
  });
  it("Renders Feature CTA prop.", () => {
    const ctaButton = screen.getByText("CTA!");
    expect(ctaButton.textContent).toBe("CTA!");
    const link = ctaButton.getAttribute("href");
    expect(link);
    expect(link).toBe("https://www.parkcrestdesign.com/");
  });
  it("Renders Feature repo prop.", () => {
    const ctaButton = screen.getByText("See the Repo");
    expect(ctaButton.textContent).toBe("See the Repo");
    const link = ctaButton.getAttribute("href");
    expect(link);
    expect(link).toBe("https://github.com/CaseyConlin/parkcrestdesign");
  });
  it("Renders Feature video prop.", () => {
    const video = screen.getByTestId("screenshot-video");
    const src = video.getAttribute("src");
    expect(src).toBe(
      "https://embed-ssl.wistia.com/deliveries/8b0214f426735ce77d32b78f20e80114e977ca3a/file.mp4"
    );
  });
});
