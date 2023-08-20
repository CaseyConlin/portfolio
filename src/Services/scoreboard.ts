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
    const data: userScore[] = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error;
    }
  }
};

export const registerNewScore = async (newScore: userScore) => {
  const res = await fetch("/scores/newscore", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newScore),
  });
  if (res.status !== 200) {
    const data = await res.json();
    return Promise.reject(data.message);
  } else {
    const data = await res.json();
    return data;
  }
};
