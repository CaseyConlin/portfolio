import React from "react";
import { WordGame } from "../src/Components/WordGame/WordGameContainer";

import { it, describe, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { restHandlers } from "../setupTests";
import { setupServer } from "msw/node";

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
});
