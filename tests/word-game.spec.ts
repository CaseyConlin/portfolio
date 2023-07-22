import { test, expect, type Page } from "@playwright/test";

const words = [
  {
    word: "seaweed",
    results: [
      {
        definition: "plant growing in the sea, especially marine algae",
        partOfSpeech: "noun",
        typeOf: ["alga", "algae"],
        hasTypes: [
          "arame",
          "sea tang",
          "sea wrack",
          "seagrass",
          "tang",
          "wrack",
        ],
      },
    ],
    syllables: {
      count: 2,
      list: ["sea", "weed"],
    },
    pronunciation: {
      all: "'si,wid",
    },
    frequency: 3.21,
  },
];

test.describe("", () => {
  test("Wrong keyboard letter button click should make button disabled and decrement error count. Correct keyboard letter button click should reveal secret word letter. Reset button click should reenable the keyboard button.", async ({
    //Intercept API call and serve word from local array.
    page,
  }) => {
    await page.route(
      "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%2B%24&letters=7&limit=1&frequencymin=3&hasDetails=typeOf&random=true",
      async (route) => {
        const json = words[0];
        await route.fulfill({ json });
      }
    );

    //Go to local dev server.
    await page.goto("http://localhost:5173/");

    const errorCountView = page.getByTestId("ErrorCountView");
    expect(errorCountView).toContainText("5");

    //Click onscreen keyboard key.
    const jKey = page.getByRole("button", { name: "J" });
    await jKey.click();

    expect(jKey).toBeDisabled();

    const updatedErrorCountView = page.getByTestId("ErrorCountView");
    expect(updatedErrorCountView).toContainText("4");

    //Reset Game
    const resetButton = page.getByRole("button", { name: "reset" });
    await resetButton.click();

    //Keyboard key previously clicked becomes not disabled.
    const updatedJKey = page.getByRole("button", { name: "J" });
    await expect(updatedJKey).not.toBeDisabled();

    //Click keyboard key to reveal only the secret letter that matches the keyboard button.
    const sKey = page.getByRole("button", { name: "S", exact: true });
    await sKey.click();
    const firstSecretLetter = page.getByTestId("SecretLetter").first();
    const lastSecretLetter = page.getByTestId("SecretLetter").last();

    await expect(firstSecretLetter).toContainText("S");
    await expect(firstSecretLetter).toBeVisible();

    await expect(lastSecretLetter).toBeHidden;
  });
});
