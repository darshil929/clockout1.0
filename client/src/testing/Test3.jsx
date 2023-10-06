import React, { useState, useEffect } from 'react';

function ClueComponent() {
  const [currentClue, setCurrentClue] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [clueStatus, setClueStatus] = useState({});

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

  const clues = [
    {
      id: 1,
      question: 'dsvgfzdgvzdg',
      image: import.meta.env.VITE_IMG_URL1,
      answer: '',
    },
    {
      id: 2,
      question: '',
      image: import.meta.env.VITE_IMG_URL2,
      answer: 'answer',
    },
    {
      id: 3,
      question: '',
      image: import.meta.env.VITE_IMG_URL3,
      answer: '',
    },
    {
      id: 4,
      question: '',
      image: import.meta.env.VITE_IMG_URL4,
      answer: '',
    },
    {
      id: 5,
      question: '',
      image: import.meta.env.VITE_IMG_URL5,
      answer: '',
    },
    {
      id: 6,
      question: '',
      image: import.meta.env.VITE_IMG_URL6,
      answer: '',
    },
  ];

  const handleClueButtonClick = (clueIndex) => {
    if (currentClue === 0) {
      setCurrentClue(clueIndex);
      // Save the current clue to local storage when a clue is selected
      localStorage.setItem('currentClue', clueIndex.toString());
      setIsCorrect(false); // Reset isCorrect when selecting a new clue
    }
  };

  const handleAnswerSubmit = () => {
    if (answer.toLowerCase() === clues[currentClue - 1].answer.toLowerCase()) {
      setIsCorrect(true);
      setClueStatus({ ...clueStatus, [currentClue]: true });
      // Clear the saved current clue and update clueStatus in local storage upon success
      localStorage.removeItem('currentClue');
      localStorage.setItem('clueStatus', JSON.stringify({ ...clueStatus, [currentClue]: true }));

      // Redirect to case 0
      setCurrentClue(0);

      // Open the link corresponding to the current clue in a new tab
      const link = clues[currentClue - 1].image;
      window.open(link, '_blank');
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    if (isCorrect) {
      setCurrentClue(0); // Redirect to clue selection
    }
  }, [isCorrect]);

  return (
    <div>
      <div>
        {/* Render Clue Buttons */}
        {currentClue === 0 && (
          <div>
            {clues.map((clue, index) => (
              <button key={index} onClick={() => handleClueButtonClick(index + 1)}>
                Clue {index + 1}
              </button>
            ))}
          </div>
        )}

        {/* Render Selected Clue */}
        {currentClue > 0 && (
          <div>
            <h2>Clue {currentClue}</h2>
            <p>{clues[currentClue - 1].question}</p>
            <img src={clues[currentClue - 1].image} alt={`Image for Clue ${currentClue}`} />
            <input
              type="text"
              placeholder="Enter your answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={handleAnswerSubmit}>Submit</button>
          </div>
        )}

        {/* Render Success/Failure Message */}
        {currentClue > 0 && clueStatus[currentClue] && (
          <p>Clue {currentClue} is already solved!</p>
        )}
        {currentClue > 0 && !clueStatus[currentClue] && isCorrect && (
          <p>Correct! You can now select another clue.</p>
        )}
        {currentClue > 0 && !clueStatus[currentClue] && !isCorrect && (
          <p>Incorrect! Try again.</p>
        )}
      </div>
    </div>
  );
}

export default ClueComponent;
