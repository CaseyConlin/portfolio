import React from "react";
import { WordGame } from "../src/Components/WordGame/WordGameContainer";

import { it, describe, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { restHandlers } from "../setupTests";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import "intersection-observer";

describe("<WordGame /> API testing", async () => {
  it("Shows a hint.", async () => {
    const server = setupServer(...restHandlers);
    server.listen({ onUnhandledRequest: "error" });
    render(<WordGame />);

    const hint = await screen.findByText(/hint: alga/i);
    expect(hint);

    server.resetHandlers();
    server.close();
  });

  it.only("Updates the hint after the reset button is clicked.", async () => {
    const user = userEvent.setup();
    const server = setupServer(...restHandlers);
    server.listen({ onUnhandledRequest: "error" });
    render(<WordGame />);

    const hint = await screen.findByText(/hint: alga/i);
    expect(hint.textContent);

    // await waitFor(() => {
    //   const hint = await screen.findByText(/hint: alga/i);
    //   expect(hint);
    //   console.log(hint);
    // });

    const resetButton = screen.getByRole("button", { name: /reset/i });
    await user.click(resetButton);
    console.log("reset hit");

    await waitFor(() => expect(screen.findByText(/hint: ballroom dance/i)));
    // console.log("hey" + updatedHint);)

    // expect(updatedHint);
    // console.log("hey" + updatedHint);
    server.resetHandlers();
    server.close();
  });
  // it("Shows on-screen keyboard.", async () => {
  //   render(<WordGame />);

  //   expect(screen.getByRole("button", { name: "J" }));
  // });

  // it("Shows disables keyboard button on click.", async () => {
  //   const user = userEvent.setup();
  //   render(<WordGame />);

  //   expect(screen.getByRole("button", { name: "J" }));
  //   await user.click(screen.getByRole("button", { name: "J" }));
  //   expect(screen.getByRole("button", { name: "J" })).toBeDisabled();
  // });

  // it("Shows cancel icon on incorrect letter guess.", async () => {
  //   const user = userEvent.setup();
  //   render(<WordGame />);

  //   await user.click(screen.getByRole("button", { name: "J" }));

  //   expect(
  //     within(screen.getByRole("button", { name: "J" })).getByTestId(
  //       "CancelIcon"
  //     )
  //   );
  // });

  // it("Shows check icon on incorrect letter guess.", async () => {
  //   const user = userEvent.setup();
  //   render(<WordGame />);

  //   await user.click(screen.getByRole("button", { name: "L" }));

  //   expect(
  //     within(screen.getByRole("button", { name: "L" })).getByTestId(
  //       "CheckCircleIcon"
  //     )
  //   );
  // });

  // it("Reenables keyboard button after reset.", async () => {
  //   const user = userEvent.setup();
  //   render(<WordGame />);

  //   expect(screen.getByRole("button", { name: "J" }));
  //   await user.click(screen.getByRole("button", { name: "J" }));
  //   expect(screen.getByRole("button", { name: "J" })).toBeDisabled();

  //   await user.click(screen.getByRole("button", { name: "Reset" }));
  //   expect(screen.getByRole("button", { name: "J" })).not.toBeDisabled();
  // });
});
