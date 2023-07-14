import React from "react";
import { SectionHeading } from "../src/Components/SectionHeading";
import { it, describe, beforeAll, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "intersection-observer";

beforeAll(() => {
  render(
    <SectionHeading headingText={"Heading Text"} id={"id"} marginOffset={20} />
  );
});

describe("<SectionHeading />", () => {
  it("Check if title and id propss render in SectionHeading", () => {
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2.textContent).toBe("Heading Text");
    expect(h2.id).toBe("id");
  });
});
