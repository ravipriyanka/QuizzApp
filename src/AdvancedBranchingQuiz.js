import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Do you enjoy sports?",
    options: [
      { answer: "Yes, a lot", next: 2 },
      { answer: "Sometimes", next: 3 },
      { answer: "Rarely", next: 4 },
      { answer: "Not at all", next: 5 },
    ],
  },
  {
    id: 2,
    question: "What type of sport do you prefer?",
    options: [
      { answer: "Team Sports", next: 6 },
      { answer: "Individual Sports", next: 6 },
      { answer: "Water Sports", next: 6 },
      { answer: "Extreme Sports", next: 6 },
    ],
  },
  {
    id: 3,
    question: "Do you enjoy reading books?",
    options: [
      { answer: "Yes, Fiction", next: 6 },
      { answer: "Yes, Non-fiction", next: 6 },
      { answer: "Only Articles", next: 6 },
      { answer: "Not really", next: 6 },
    ],
  },
  {
    id: 4,
    question: "What type of movies do you like?",
    options: [
      { answer: "Action", next: 6 },
      { answer: "Drama", next: 6 },
      { answer: "Comedy", next: 6 },
      { answer: "Documentary", next: 6 },
    ],
  },
  {
    id: 5,
    question: "Thank you for completing the quiz!",
    options: [],
  },
  {
    id: 6,
    question: "How do you like to spend your weekends?",
    options: [
      { answer: "Going on adventures", next: 5 },
      { answer: "Relaxing at home", next: 5 },
      { answer: "Socializing with friends", next: 5 },
      { answer: "Working on a hobby", next: 5 },
    ],
  },
];

const AdvancedBranchingQuiz = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questions.find(
    (question) => question.id === currentQuestionId
  );

  const handleAnswer = (nextQuestionId, answer) => {
    setAnswers([...answers, { questionId: currentQuestionId, answer }]);
    setCurrentQuestionId(nextQuestionId);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Interactive Branching Quiz</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.length > 0 ? (
          currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.next, option.answer)}
              style={{
                padding: "10px 20px",
                margin: "5px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {option.answer}
            </button>
          ))
        ) : (
          <p>You have completed the quiz! Thank you for participating.</p>
        )}
      </div>
      <div>
        <h3>Your Answers:</h3>
        {answers.map((answer, index) => (
          <p key={index}>
            Question {answer.questionId}: {answer.answer}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AdvancedBranchingQuiz;
