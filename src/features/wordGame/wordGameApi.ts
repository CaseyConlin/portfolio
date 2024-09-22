import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type NewWord = {
  definition: string;
  partOfSpeech: string;
  synonyms: string[];
  typeOf: string[];
  hasMembers: string[];
  memberOf: string[];
};

type newWordApiResponse = {
  word: string;
  frequency: number;
  results: NewWord[];
};

// Define a service using a base URL and expected endpoints
export const getNewWordApi = createApi({
  reducerPath: "newWordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wordsapiv1.p.rapidapi.com/words/",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "33d4d025b5mshe7ec01b8681a024p1d410bjsnae9d2b24f1e4",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getNewWordByCount: builder.query<newWordApiResponse, string>({
      query: (letterCount = "7") =>
        `?letterPattern=%5E%5Ba-z%5D%2B%24&letters=${letterCount}&limit=1&hasDetails=typeOf&random=true`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewWordByCountQuery } = getNewWordApi;
