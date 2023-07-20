import React from "react";
import { WordGame } from "../src/Components/WordGame/WordGameContainer";
import { it, describe, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "intersection-observer";

describe("<WordGame /> keyboard testing", () => {
  it("Shows on-screen keyboard.", async () => {
    render(<WordGame />);

    expect(screen.getByRole("button", { name: "J" }));
  });

  it("Shows disables keyboard button on click.", async () => {
    const user = userEvent.setup();
    render(<WordGame />);

    expect(screen.getByRole("button", { name: "J" }));
    await user.click(screen.getByRole("button", { name: "J" }));
    expect(screen.getByRole("button", { name: "J" })).toBeDisabled();
  });

  it("Shows cancel icon on incorrect letter guess.", async () => {
    const user = userEvent.setup();
    render(<WordGame />);

    await user.click(screen.getByRole("button", { name: "J" }));

    expect(
      within(screen.getByRole("button", { name: "J" })).getByTestId(
        "CancelIcon"
      )
    );
  });

  it("Shows check icon on incorrect letter guess.", async () => {
    const user = userEvent.setup();
    render(<WordGame />);

    await user.click(screen.getByRole("button", { name: "L" }));

    expect(
      within(screen.getByRole("button", { name: "L" })).getByTestId(
        "CheckCircleIcon"
      )
    );
  });

  it("Reenables keyboard button after reset.", async () => {
    const user = userEvent.setup();
    render(<WordGame />);

    expect(screen.getByRole("button", { name: "J" }));
    await user.click(screen.getByRole("button", { name: "J" }));
    expect(screen.getByRole("button", { name: "J" })).toBeDisabled();

    await user.click(screen.getByRole("button", { name: "Reset" }));
    expect(screen.getByRole("button", { name: "J" })).not.toBeDisabled();
  });
});
