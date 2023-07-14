import React from "react";
import { Navbar } from "../src/Components/Navbar";
import { it, describe, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "intersection-observer";

// function setup(jsx) {
//   return {
//     user: userEvent.setup(),
//     // Import `render` from the framework library of your choice.
//     // See https://testing-library.com/docs/dom-testing-library/install#wrappers
//     ...render(jsx),
//   };
// }

// test("render with a setup function", async () => {
//   const { user } = setup(<MyComponent />);
//   // ...
// });

// test('trigger some awesome feature when clicking the button', async () => {
//     const user = userEvent.setup()
//     // Import `render` and `screen` from the framework library of your choice.
//     // See https://testing-library.com/docs/dom-testing-library/install#wrappers
//     render(<Navbar />)

//     await user.click(screen.getByRole('button', {name: /click me!/i}))

// })

beforeEach(() => {
  render(<Navbar />);
});

describe("<Navbar />", () => {
  it("Check if menu opens on mobile.", async () => {
    const navButton = screen.getByRole("button");
    fireEvent.click(navButton);
    expect(
      await screen.findByTestId(/Selected WorktestId/i)
    ).toBeInTheDocument();

    // const h2 = screen.getByRole("heading", { level: 2 });
    // expect(h2.textContent).toBe("Heading Text");
    // expect(h2.id).toBe("id");

    // const btnIncrement = screen.getByTestId("btn-increment");
    // fireEvent.click(btnIncrement);

    // expect(screen.getByTestId("counter-text")).toHaveTextContent("1");
  });
});
