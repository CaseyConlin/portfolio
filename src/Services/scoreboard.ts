export const getScores = async () => {
  const url = `/scores/list`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("We're having trouble connecting to our scorebaord 🫥");
    }
    console.log("hey");
    const data: userScore[] = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error;
    }
  }
};
