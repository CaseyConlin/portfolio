import React from "react";
import { ChipsArray } from "../src/Components/Feature/Chips";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "intersection-observer";

beforeAll(() => {
  render(<ChipsArray techItems={["React", "Tailwind"]} />);
});
describe("<ChipsArray />", () => {
  it("Shows chip value.", () => {
    const spanReact = screen.getByText("React");
    expect(spanReact.textContent).toBe("React");
    const spanTailwind = screen.getByText("Tailwind");
    expect(spanTailwind.textContent).toBe("Tailwind");
  });
});
