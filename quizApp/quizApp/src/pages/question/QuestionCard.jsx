import React, { useEffect, useState } from "react";
import "./questionCard.css";
const QuestionCard = ({
  questions,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  const [time, setTime] = useState(30);
  const checkQuestion = (e) => {
    const checkAnswer = e.target.value == questions[count]?.correct_answer;
    if (checkAnswer) {
      setScore(score + 10);
    }
    setCount(count + 1);
    setTime(30);
    if (count == 9) {
      setModal(true);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
      if (time == 0 && count < 10) {
        setCount(count + 1);
        setTime(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="containerCard">
      <div className="sides">
        <div className="time">Remaining: {time}</div>
        <div className="score">Score: {score}</div>
      </div>
      <div className="card">
        <div className="question">
          {count + 1}/10 {questions[count]?.question}
        </div>
        <div className="answer">
          {questions[count]?.answers?.map((answer, i) => {
            return (
              <button onClick={checkQuestion} key={i} value={answer}>
                {answer}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
