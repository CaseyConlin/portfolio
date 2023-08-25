import { Dispatch, SetStateAction } from "react";
export const winMessages = [
  " 😀 You totally won! 😀 ",
  " 📚 You're a human dictionary! 📚 ",
  " ⚔️ You're the word warrrior! ⚔️ ",
  " 🔓 You're a letter locksmith! 🔓 ",
  " 🔫 No word can hide from you! 🔫 ",
];
export const loseMessages = [
  " ☹️ Words are hard. ☹️ ",
  " 🔥 You'll get 'em next time 🔥 ",
  " 💩 That hint was bogus, right? 💩 ",
  " ♻️C'mon, try again. You got this!♻️ ",
  " 🦆 Is that even a word?? 🦆 ",
  " ⌨️ This game is probably just coded badly. ⌨️ ",
];

// Set state for alert functions using array of message responses.
export const setAlert = (
  arr: string[],
  severity: "success" | "error",
  alertFunction: Dispatch<
    SetStateAction<{ message: string; severity: "success" | "error" }>
  >
) => {
  alertFunction({
    message: arr[Math.floor(Math.random() * (arr.length - 0) + 0)],
    severity: severity,
  });
};

// Use state variables to return a score for scoreboard ranking.
//Calculate score based on the frequency (occurrence) of the word as reported
//by the API, the word length, whether the word has repeated letters, the
//number of errors incurred during play, and each letter's point value from
//Scrabble.

export const scoreCalculator = (
  secretWord: string[],
  frequency: number,
  errorCount: number
) => {
  let score = Math.ceil(secretWord.length * ((7 - frequency * 1) / 7) * 100);
  score += errorCount * 5;
  secretWord.map((letter) => {
    if (letter.match(/A|E|I|O|U|L|N|S|T|R/)) {
      score += 1;
    }
    if (letter.match(/D|G/)) {
      score += 2;
    }
    if (letter.match(/B|C|M|P/)) {
      score += 3;
    }
    if (letter.match(/F|H|V|W|Y/)) {
      score += 4;
    }
    if (letter.match(/K/)) {
      score += 5;
    }
    if (letter.match(/J|X/)) {
      score += 8;
    }
    if (letter.match(/Q|Z/)) {
      score += 10;
    }
  });
  new Set(secretWord).size !== secretWord.length ? score : (score += 10);
  return score;
};
