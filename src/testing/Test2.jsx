// // For example, in your React component
// import React from 'react';

// function Test() {
//   // Access environment variables
//   const apiKey = import.meta.env.VITE_APP_API_KEY;
//   const baseUrl = import.meta.env.VITE_IMG_URL1;

//   return (
//     <div>
//       <h1>Environment Variables Example</h1>
//       <p>API Key: {apiKey}</p>
//       <p>Base URL: {baseUrl}</p>
//       <a href={baseUrl} download='AAJ.jpeg'>hello</a>
//     </div>
//   );
// }

// export default Test;

// import React, { useState, useEffect } from 'react';

// function ClueComponent() {
//   const [currentClue, setCurrentClue] = useState(0);
//   const [answer, setAnswer] = useState('');
//   const [isCorrect, setIsCorrect] = useState(false);

//   const clues = [
//     {
//       id: 1,
//       question: 'dsvgfzdgvzdg',
//       image: '',
//       answer: '',
//     },
//     {
//       id: 2,
//       question: '',
//       image: '',
//       answer: 'answer',
//     },
//     {
//       id: 3,
//       question: '',
//       image: '',
//       answer: '',
//     },
//     {
//       id: 4,
//       question: '',
//       image: '',
//       answer: '',
//     },
//     {
//       id: 5,
//       question: '',
//       image: '',
//       answer: '',
//     },
//     {
//       id: 6,
//       question: '',
//       image: '',
//       answer: '',
//     },
//   ];

//   const handleClueButtonClick = (clueIndex) => {
//     if (currentClue === 0) {
//       setCurrentClue(clueIndex);
//     }
//   };

//   const handleAnswerSubmit = () => {
//     if (answer.toLowerCase() === clues[currentClue - 1].answer.toLowerCase()) {
//       setIsCorrect(true);
//     } else {
//       setIsCorrect(false);
//     }
//   };

//   useEffect(() => {
//     if (isCorrect) {
//       setCurrentClue(0); // Redirect to clue selection
//     }
//   }, [isCorrect]);

//   return (
//     <div>
//       <div>
//         {/* Render Clue Buttons */}
//         {currentClue === 0 && (
//           <div>
//             {clues.map((clue, index) => (
//               <button key={index} onClick={() => handleClueButtonClick(index + 1)}>
//                 Clue {index + 1}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Render Selected Clue */}
//         {currentClue > 0 && (
//           <div>
//             <h2>Clue {currentClue}</h2>
//             <p>{clues[currentClue - 1].question}</p>
//             <img src={clues[currentClue - 1].image} alt={`Image for Clue ${currentClue}`} />
//             <input
//               type="text"
//               placeholder="Enter your answer"
//               value={answer}
//               onChange={(e) => setAnswer(e.target.value)}
//             />
//             <button onClick={handleAnswerSubmit}>Submit</button>
//           </div>
//         )}

//         {/* Render Success/Failure Message */}
//         {currentClue > 0 && isCorrect && <p>Correct! You can now select another clue.</p>}
//         {currentClue > 0 && !isCorrect && <p>Incorrect! Try again.</p>}
//       </div>
//     </div>
//   );
// }

// export default ClueComponent;

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [currentClue, setCurrentClue] = useState(0); // Initialize with 0 to show the clue buttons

//   const clues = [
//     {
//       id: 1,
//       question: "Question 1",
//       image: "image1.jpg",
//     },
//     {
//       id: 2,
//       question: "Question 2",
//       image: null, // No image for this clue
//     },
//     {
//       id: 3,
//       question: "Question 3",
//       image: "image3.jpg",
//     },
//     {
//       id: 4,
//       question: "Question 4",
//       image: null, // No image for this clue
//     },
//     {
//       id: 5,
//       question: "Question 5",
//       image: "image5.jpg",
//     },
//     {
//       id: 6,
//       question: "Question 6",
//       image: "image6.jpg",
//     },
//   ];

//   // Function to handle the submission of an answer
//   const handleAnswerSubmit = (answer) => {
//     // Simulate checking the answer with a database (replace with actual logic)
//     const isCorrect = true; // Change to check against the actual database

//     if (isCorrect) {
//       setCurrentClue(0); // Redirect to clue buttons if the answer is correct
//     } else {
//       // Handle incorrect answer (e.g., show an error message)
//     }
//   };

//   useEffect(() => {
//     // Add logic here to handle what happens when currentClue changes
//   }, [currentClue]);

//   return (
//     <div>
//       {/* Render clue buttons */}
//       {currentClue === 0 && (
//         <div>
//           {clues.map((clue, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentClue(clue.id)}
//             >
//               Clue {clue.id}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Render the current clue */}
//       {currentClue > 0 && (
//         <div>
//           <h1>Clue {currentClue}</h1>
//           <p>Question: {clues[currentClue - 1].question}</p>
//           {clues[currentClue - 1].image && (
//             <img src={clues[currentClue - 1].image} alt={`Image for clue ${currentClue}`} />
//           )}
//           {/* Add input field and submit button for answer */}
//           <input type="text" placeholder="Your answer" />
//           <button onClick={() => handleAnswerSubmit("user's answer")}>
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';

function ClueComponent() {
  const [currentClue, setCurrentClue] = useState(() => {
    // Try to get currentClue from local storage, default to 0 if not found
    const storedCurrentClue = localStorage.getItem('currentClue');
    return storedCurrentClue ? parseInt(storedCurrentClue, 10) : 0;
  });
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(() => {
    // Try to get isCorrect from local storage, default to false if not found
    const storedIsCorrect = localStorage.getItem('isCorrect');
    return storedIsCorrect ? JSON.parse(storedIsCorrect) : false;
  });

  const clues = [
    {
      id: 1,
      question: 'dsvgfzdgvzdg',
      image: '',
      answer: '',
    },
    {
      id: 2,
      question: '',
      image: '',
      answer: 'answer',
    },
    {
      id: 3,
      question: '',
      image: '',
      answer: '',
    },
    {
      id: 4,
      question: '',
      image: '',
      answer: '',
    },
    {
      id: 5,
      question: '',
      image: '',
      answer: '',
    },
    {
      id: 6,
      question: '',
      image: '',
      answer: '',
    },
  ];

  const handleClueButtonClick = (clueIndex) => {
    if (currentClue === 0) {
      setCurrentClue(clueIndex);
    }
  };

  const handleAnswerSubmit = () => {
    if (answer.toLowerCase() === clues[currentClue - 1].answer.toLowerCase()) {
      setIsCorrect(true);
      // Save isCorrect to local storage
      localStorage.setItem('isCorrect', JSON.stringify(true));
    } else {
      setIsCorrect(false);
      // Save isCorrect to local storage
      localStorage.setItem('isCorrect', JSON.stringify(false));
    }
  };

  useEffect(() => {
    if (isCorrect) {
      setCurrentClue(0); // Redirect to clue selection
      // Save currentClue to local storage
      localStorage.setItem('currentClue', '0');
    } else {
      // Save currentClue to local storage
      localStorage.setItem('currentClue', currentClue.toString());
    }
  }, [isCorrect, currentClue]);

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
        {currentClue > 0 && isCorrect && <p>Correct! You can now select another clue.</p>}
        {currentClue > 0 && !isCorrect && <p>Incorrect! Try again.</p>}
      </div>
    </div>
  );
}

export default ClueComponent;
