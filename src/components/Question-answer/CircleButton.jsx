

import React, { useState } from "react";

const CircleButton = ({ id, changeQuestion, submitted }) => {
  const [isClicked, setIsClicked] = useState(false);
  const change = () => {
    setIsClicked(true);
    changeQuestion(id - 1);
  };
  
  return (
    <button
      id={id}
      className={`w-16 h-16 rounded-full transition-colors ${
        submitted
          ? "bg-slate-950 text-slate-100"
          : isClicked
          ? "bg-blue-600 text-slate-100"
          : "bg-teal-300 text-black"
      } hover:opacity-80 focus:outline-none`}
      onClick={change}
      disabled={submitted}
    >
      {id}
    </button>
  );
};

export default CircleButton;
