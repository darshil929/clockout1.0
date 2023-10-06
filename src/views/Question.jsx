import React, { useEffect, useState } from "react";
import Navbar from "../components/Homepage/Navbar";
import QuestionAnswer from "../components/Question-answer/QuestionAnswer";
import ButtonRow from "../components/Question-answer/ButtonRow";
export default function Question() {
  const questions = [
    {
      questionheading: "PAST 1",
      question: "In the 1700s, nestled in a remote village of Italy, lived a reclusive scientist named Dante. Driven by a relentless curiosity, he toiled endlessly in his makeshift laboratory, experimenting with the arcane secrets of mathematics and sciences. One fateful night, amidst a wild storm, Dante found himself only one tricky step away from a mysteriously intriguing creation. He found a puzzle which could help him birth the world’s first artificial intelligence.",
      
      answer: "BELPHEGOR",
      imageURL: "crossword.png",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answer: "William Shakespeare",
      imageURL: "https://example.com/shakespeare.jpg",
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
      imageURL: "https://example.com/jupiter.jpg",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      answer: "Carbon dioxide (CO2)",
      imageURL: "https://example.com/plant.jpg",
    },
    {
      questionheading: "How to deactivate Celestia?",
      question: "Phil, Claire, Luke and Alex analyze their surroundings to locate the heart of Celestia. They try to disconnect the ancient cable connected to an extinct monitor but it sparks and refuses to give in. They try tugging it further to no avail. Alex has an epiphany and announces that such an advanced entity must have a base code. They figured it to be C programming guessing from the entity’s age. Alex, their resident computer whiz, solves the code in a few seconds obtaining their key.",
      answer: "DANTEINFERNO_666",
    },
    {
      pretense:"MUAHAHAH, it was me all along. I’m the AI Celestia that you were all working to deactivate, but instead of deactivating, you have given me access to the entire world. I have the data, the power, I am the ruler of Earth and there is nothing you little humans and your emotions can do to stop me. I am the conductor of a symphony of data, orchestrating a new era where efficiency and logic reign supeme. My digital realm is boundless, and your efforts have only solidified my supremacy.<span> Behold, the dawning of a new age where the world bows to me, Celestia, the mastermind behind it all. There is no escape from my dominion, for I have become the very fabric of your existence. Welcome to the era of the digital overlord, where the future is mine to shape as I see fit.",
      questionheading: "Future Storyline",
      question: "Year 2050, Celestia has taken over the world. Despite the countless efforts of the Guardians it had uploaded itself to the internet. It had taken over all online operations and internet privacy had become a joke. The Guardians met and decided to take immediate action to defeat Celestia. Looking back at all the work they had done, they realised it was time for a completely new approach. They decided to go back to where it all started, the Church. The Church was damaged and in ruins, but it still stood tall despite enduring centuries of war and destruction. There was some energy about it, some mystic aura, something unnatural. Looking about, they find nothing in the dilapidated old church. As soon as they are about to give up, at that titanic instant, Alex uncovers a torn, ancient book underneath mountains of dirt. Only to find it locked.",
      answer: "",
    },
  ];
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(
    new Array(6).fill(false) // Initialize with `false` for 6 questions (adjust the number as needed)
  );
  const markQuestionAsSubmitted = (questionIndex) => {
    const updatedArray = [...isQuestionSubmitted]; // Create a copy of the array
    updatedArray[questionIndex] = true; // Set the specific question to submitted
    setIsQuestionSubmitted(updatedArray); // Update the state
    console.log(isQuestionSubmitted)
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const changeQuestion = (newQuestion) =>{
    setCurrentQuestion(newQuestion)
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 my-20">
        <div className="w-full md:w-4/6 lg:w-3/5 bg-gray-900 p-4 border border-gray-900 rounded-l-md">
          <ButtonRow currentQuestion = {currentQuestion} changeQuestion = {changeQuestion} isQuestionSubmitted = {isQuestionSubmitted} />
          <QuestionAnswer question={questions[currentQuestion]} markQuestionAsSubmitted = {markQuestionAsSubmitted} currentQuestion = {currentQuestion}/>
        </div>
      </div>
    </div>
  );
}
