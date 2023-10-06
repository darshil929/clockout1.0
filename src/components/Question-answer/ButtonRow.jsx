import React from "react";
import CircleButton from "./CircleButton";
export default function ButtonRow({
  currentQuestion,
  changeQuestion,
  isQuestionSubmitted,
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-3/4 justify-between pt-2 pb-3">
        <CircleButton
          id="1"
          changeQuestion={changeQuestion}
          submitted={isQuestionSubmitted[0]}
        />
        <CircleButton
          id="2"
          changeQuestion={changeQuestion}
          submitted={isQuestionSubmitted[1]}
        />
        <CircleButton
          id="3"
          changeQuestion={changeQuestion}
          submitted={isQuestionSubmitted[2]}
          />
        <CircleButton
          id="4"
          changeQuestion={changeQuestion}
          submitted={isQuestionSubmitted[3]}
        />
        <CircleButton
          id="5"
          changeQuestion={changeQuestion}
          submitted={isQuestionSubmitted[4]}
        />
        <CircleButton
          id="6"
          changeQuestion={changeQuestion}
          submitted={isQuestionSubmitted[5]}
        />
      </div>
    </div>
  );
}
