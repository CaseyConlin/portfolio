import React from "react";
import { ChipsArray } from "../src/Components/Feature/Chips";
import { it, describe, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import "intersection-observer";

beforeAll(() => {
  render(<ChipsArray techItems={["React", "Tailwind"]} />);
});
describe("<ChipsArray />", () => {
  it("Shows chip values.", () => {
    const spanReact = screen.getByText("React");
    expect(spanReact.textContent).toBe("React");
    const spanTailwind = screen.getByText("Tailwind");
    expect(spanTailwind.textContent).toBe("Tailwind");
  });
});
