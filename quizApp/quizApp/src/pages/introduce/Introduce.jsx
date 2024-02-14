import React, { useState } from "react";
import "./introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [changeDifficulty, setChangeDifficulty] = useState("");
  const navigate = useNavigate();
  const totalQuestions = 10;
  const startQuiz = () => {
    if (changeDifficulty) {
      navigate(`/quiz/${changeDifficulty}/${totalQuestions}`);
    }
  };
  return (
    <div className="introduce">
      <div className="container">
        <img
          src="https://thetrainingarcade.com/wp-content/uploads/2020/06/Trivia-logo-01.png"
          width={400}
          height={200}
        />
        <Dropdown
          difficulty={difficulty}
          setChangeDifficulty={setChangeDifficulty}
        />
        <button onClick={startQuiz} className="button">
          Teste Başla
        </button>
      </div>
    </div>
  );
};

export default Introduce;
