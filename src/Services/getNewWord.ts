import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export type NewWord = {
  word: string;
  hint: string;
  frequency: number;
};

// Define a service using a base URL and expected endpoints
export const getNewWordApi = createApi({
  reducerPath: "newWordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wordsapiv1.p.rapidapi.com/words/",
  }),
  endpoints: (builder) => ({
    getNewWordByCount: builder.query<NewWord, string>({
      query: (letterCount = "6") =>
        `?letterPattern=%5E%5Ba-z%5D%2B%24&letters=${letterCount}&limit=1&hasDetails=typeOf&random=true`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewWordByCountQuery } = getNewWordApi;

export const getNewWord = async (
  letterCount: number | number[] = 6,
  retries = 10
): Promise<NewWord | { message: string }> => {
  const letters = letterCount;
  const url = `https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%2B%24&letters=${letterCount}&limit=1&hasDetails=typeOf&random=true`;
  const options = {
    retry: 3,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "33d4d025b5mshe7ec01b8681a024p1d410bjsnae9d2b24f1e4",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("We're having trouble connecting to our word list 🫥");
    }

    const data = await response.json();

    if (
      data.results[0].typeOf[0] === undefined ||
      data.frequency === undefined
    ) {
      if (retries > 0) {
        return getNewWord(letters, retries - 1);
      }
    }

    return {
      word: data.word.toUpperCase(),
      hint: data.results && data.results[0].typeOf[0],
      frequency: data.frequency,
    };
  } catch (error) {
    let message = "";
    if (error instanceof Error) message = error.message;
    if (message.includes("Failed to fetch")) {
      return { message: "Bad Internet Connection" };
    } else {
      return { message: message };
    }
  }
};
