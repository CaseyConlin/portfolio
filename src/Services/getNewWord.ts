export const getNewWord = async (letterCount: number | number[] = 6) => {
  const url = `https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%2B%24&letters=${letterCount}&limit=1&frequencymin=3&hasDetails=typeOf&random=true`;
  // const url = `https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%2B%24&letters=${letterCount}&limit=1&frequencymin=3&random=true`;

  const options = {
    retry: 3,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.status === 429 || response.status === 401) {
      throw new Error("We're having trouble connecting to our word list 🫥");
    }

    const data = await response.json();
    if (!data.results[0].typeOf[0]) {
      throw new Error("Bad API response 🫥");
    }

    return {
      word: data.word.toUpperCase(),
      hint: data.results && data.results[0].typeOf[0],
    };
  } catch (error) {
    let message = "";
    if (error instanceof Error) message = error.message;
    if (message.includes("Failed to fetch")) {
      return { apiError: "Bad Internet Connection" };
    } else {
      return { apiError: message };
    }
  }
};
