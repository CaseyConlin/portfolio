import axios from "axios";

export const getNewWord = async () => {
  const options = {
    method: "GET",
    // url: "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^a.{8}$",
    url: "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%2B%24&frequencyMin=3&hasDetails=typeOf&random=true",
    params: {
      limit: "1",
      letters: "6",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return {
      word: response.data.word,
      hint: response.data.results[0].typeOf[0],
    };
  } catch (error) {
    console.error(error);
  }
};
