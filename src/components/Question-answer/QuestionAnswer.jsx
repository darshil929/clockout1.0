import React, { useState, useRef } from "react";
import '../../App.css'
export default function QuestionAnswer({
  question,
  markQuestionAsSubmitted,
  currentQuestion,
}) {
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const h1Ref = useRef(null);
  // let interval = null;
  // const handleMouseOver = () => {
  //   const targetText = h1Ref.current.dataset.value; // Replace with your initial text
  //   let iteration = 0;
  //   clearInterval(interval);
  //   interval = setInterval(() => {
  //     h1Ref.current.textContent = targetText
  //       .split("")
  //       .map((letter, index) => {
  //         if (index < iteration) {
  //           return targetText[index];
  //         }

  //         return letters[Math.floor(Math.random() * 26)];
  //       })
  //       .join("");

  //     if (iteration >= targetText.length) {
  //       clearInterval(interval);
  //     }

  //     iteration += 1;
  //   }, 30);
  // };

  // const handleMouseLeave = () => {
  //   clearInterval(interval);
  //   h1Ref.current.textContent = h1Ref.current.dataset.value || 'Your Text Here';
  // };

  const submitAnswer = () => {
    if (answer === question.answer) {
      setScore(score + 1);
    }
    markQuestionAsSubmitted(currentQuestion);
    setAnswer("");
  };

  return (
    <div>
      {question.pretense ? (
        <p
          data-value={question.pretense}
          className="mb-4 font-orbitron font-bold text-transparent text-sm lg:text-xl bg-clip-text text-white text-center"
        >
          {question.pretense.split("<span>").map((text, index) => (
            <span key={index} style={{ display: "block" }}>
              {text}
            </span>
          ))}
        </p>
      ) : null}
      <h1
        data-value={question.questionheading}
        className="mb-4 font-orbitron font-bold text-transparent text-3xl lg:text-6xl bg-clip-text bg-gradient-to-r from-teal-300 to-blue-600 text-center"
      >
        {question.questionheading}
      </h1>
      <p
        data-value={question.question}
        className="mb-4 font-bold font-orbitron text-transparent text-sm lg:text-xl bg-clip-text text-white text-center"
      >
        {question.question}
      </p>
      {question.imageURL ? (
        <img src={question.imageURL} alt="Question" className="w-full mb-4" />
      ) : null}

      {/* Answer Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Answer"
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={answer}
          onChange={handleAnswerChange}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="btn"
          onClick={submitAnswer}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
