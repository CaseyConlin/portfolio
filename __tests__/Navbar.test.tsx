import React from "react";
import { Navbar } from "../src/Components/Navbar";
import { it, describe, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "intersection-observer";

beforeEach(() => {
  render(<Navbar />);
});

describe("<Navbar />", () => {
  it("Check if mobile menu is not visible.", async () => {
    //     expect(getByTestId('backdrop')).not.toBeVisible();
    expect(await screen.findByTestId(/Selected WorktestId/i)).not.toBeVisible();
  });
  it("Check if menu opens on mobile.", async () => {
    const navButton = screen.getByRole("button");
    fireEvent.click(navButton);
    expect(await screen.findByTestId(/Selected WorktestId/i)).toBeVisible();
  });
});
