import React from "react";
import axios from "axios";

const shuffleArray = (array) => {
  return [...array].sort(() => {
    Math.random() - 0.5;
  });
};

const api = async (difficulty, amount) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  );
  return response.data.results.map((item) => ({
    ...item,
    answers: shuffleArray([...item.incorrect_answers, item.correct_answer]),
  }));
};

export default api;
