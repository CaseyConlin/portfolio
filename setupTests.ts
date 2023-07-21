import "@testing-library/jest-dom/extend-expect";

import { rest } from "msw";
import { fetch } from "cross-fetch";

const getLatest = (arr: any) => {
  let i = 0;
  const message = arr[i];
  console.log("heya" + 1);
  i++;
  return message;
};

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

export const restHandlers = [
  rest.get(
    "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%2B%24&letters=6&limit=1&frequencymin=3&hasDetails=typeOf&random=true",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(getLatest(words)));
    }
  ),
];

global.fetch = fetch;
