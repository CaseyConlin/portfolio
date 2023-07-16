import axios, { AxiosError, AxiosResponse } from "axios";

axios.interceptors.response.use(
  (res) => {
    const { data } = res;
    console.log(data);
    const dataId = data.results[0].typeOf;
    console.log(dataId);

    // AxiosError: Bad API Responsehere now
    // AxiosError: Network Errorhere now

    // Bad API Responseerrohandler
    // Network Errorerrohandler

    // getNewWord.ts?t=1689466474904:27 messageNetwork Error
    // getNewWord.ts:37 here now
    // getNewWord.ts:38 errorType object
    // getNewWord.ts:39 errorAxiosError: Network Error
    // getNewWord.ts:40 messageNetwork Error
    // getNewWord.ts:95 AxiosError: Network Errorerrorhandler

    if (!dataId) {
      console.log("got here");

      res.status = 525;
      res.statusText = "Bad API Request";

      // throw res;
      // throw new Error("Bad API Response");
      Promise.reject("Bad API Response");
      // The one below is the closest iin terms of errors.
      console.log(res);
      return res;

      // new axios.CanceledError("Bad API Response");

      // return Promise.reject(new AxiosError("Bad API Response", "500"));

      // throw new Error("Bad API Response");
    } else {
      return res;
    }
  },

  async (err) => {
    const { config, message } = err;
    console.log("here now");
    console.log("errorType " + typeof err);
    console.log("error" + err);
    console.log("message" + err.message);
    if (!config || !config.retry) {
      return Promise.reject(err);
    }
    // retry while API returns word with no typeOf property for hint or Network Error

    if (
      !(
        message.includes("Bad API Response") ||
        message.includes("Network Error")
      )
    ) {
      // if (!message.includes("Bad API Response" || "Network Error")) {
      return Promise.reject(err);
    }
    console.log("aslmots");
    config.retry -= 1;
    const delayRetryRequest = new Promise((resolve) => {
      setTimeout(() => {
        console.log("retry the request", config.url);
        resolve(true);
      }, 1000);
    });
    await delayRetryRequest;
    return await axios(config);
  }
);

// when request, can set retry times and retry delay time
// axios.get(url, { retry: 3, retryDelay: 3000 });

export const getNewWord = async (letterCount: number | number[] = 6) => {
  const options = {
    retry: 3,
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%2B%24&frequencyMin=3&random=true",
    // validateStatus: function (status: number) {
    //   return status < 500; // Resolve only if the status code is less than 500
    // },
    params: {
      limit: "1",
      letters: letterCount,
      // hasDetails: "typeOf",
      // Cannot read properties of undefined
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  try {
    const response = (await axios.request(options)) as AxiosResponse;
    console.log(response.status);

    return {
      word: response.data.word,
      hint: response.data.results && response.data.results[0].typeOf[0],
    };
  } catch (error) {
    const err = error as AxiosError;
    console.log(error + "errorhandler");
    if (err.response?.status === 429 || err.response?.status === 401) {
      return {
        apiError: "We're having trouble connecting to our word list 🫥.",
      };
    } else {
      return { apiError: err.message };
    }
  }
};
