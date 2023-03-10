export const useRandomQuestions = (data) => {
  let isError = false;
  let randomData = [];
  if (!data || data.length <= 0) {
    isError = true;
  } else {
    isError = false;
    randomData = data.sort(() => Math.random() - 0.5);
  }

  return { randomData, isError };
};
