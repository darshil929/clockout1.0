import React, { useState, useEffect } from 'react';
import clues from './clues';

function ClueComponent() {
  const [currentClue, setCurrentClue] = useState(1);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [clueStatus, setClueStatus] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Retrieve the current clue and clueStatus from local storage on component mount
  useEffect(() => {
    const savedClue = localStorage.getItem('currentClue');
    const savedClueStatus = localStorage.getItem('clueStatus');
    if (savedClue) {
      setCurrentClue(parseInt(savedClue));
    }
    if (savedClueStatus) {
      setClueStatus(JSON.parse(savedClueStatus));
    }
  }, []);

  const handleClueButtonClick = (clueIndex) => {

    if (clueIndex === currentClue || clueIndex === currentClue + 1) {
      setCurrentClue(clueIndex);
      setIsCorrect(false);
      setHasSubmitted(false);
    }
  };

  const handleAnswerSubmit = async() => {
    if (answer.toLowerCase() === clues[currentClue - 1].answer.toLowerCase()) {
      setIsCorrect(true);
      setClueStatus({ ...clueStatus, [currentClue]: true });
      const response = await fetch('http://localhost:3000/team/submit-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId: currentClue }),
      });

    localStorage.removeItem('currentClue');
    localStorage.setItem('clueStatus', JSON.stringify({ ...clueStatus, [currentClue]: true }));

    // Show a custom alert message for the current clue
    const alertMessage = clues[currentClue - 1].alertMessage;
    alert(alertMessage);

    // Redirect to the next sequential clue if not the last clue
    if (currentClue < clues.length) {
      setCurrentClue(currentClue + 1);
    }

    // Open the link corresponding to the current clue in a new tab
    if (currentClue >= 2) {
      const link = import.meta.env[`VITE_IMG_URL${currentClue - 1}`];
      window.open(link, '_blank');
    }
  } else {
    setIsCorrect(false);
}

setHasSubmitted(true);
  };

return (
  <div className='clues-container'>
    <div className='clues-content'>
      {/* Render Clue Buttons */}
      <div className='clue-tabs'>
        {clues.map((clue, index) => (
          <button
            className='clue-tab'
            key={index}
            onClick={() => handleClueButtonClick(index + 1)}
            disabled={index + 1 > currentClue}
          >
            Clue {index + 1}
          </button>
        ))}
      </div>

      {/* Render Selected Clue */}
      {currentClue > 0 && (
        <div className='clues'>
          <h2 className='clues-heading'>Clue {currentClue}</h2>
          <p className='clues_para'>{clues[currentClue - 1].question}</p>
          {/* <img src={clues[currentClue - 1].image} alt={`Image for Clue ${currentClue}`} /> */}
          <div className="form">
            <input
              type="text"
              placeholder="Enter your answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button id='testing' className='submit_btn' onClick={handleAnswerSubmit}>Submit</button>
            {/* <a id='testing' className='submit_btn' href='/register'>Click</a> */}
          </div>
          {hasSubmitted && !isCorrect && (
            <div className="wrong-answer">
              <p>Try Again!</p>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);
}

export default ClueComponent;

