import { getNewWord } from "./getNewWord";
import { useGameContext } from "../WordGameContext/WordGameContext";

export const useNewWord = () => {
  const { setSecretWord } = useGameContext();

  getNewWord().then((response) => {
    response && setSecretWord(response.word, response.hint);
  });
};
