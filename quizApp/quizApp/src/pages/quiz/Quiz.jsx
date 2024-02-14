import React, { useEffect, useState } from "react";
import "./quiz.css";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import QuestionCard from "../question/QuestionCard";
import Modal from "../modal/Modal";

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(async () => {
    const newApi = async () => {
      const response = await api(difficulty, amount);
      setQuestions(response);
    };
    await newApi();
  }, []);

  return (
    <div>
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionCard
          questions={questions}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Quiz;
