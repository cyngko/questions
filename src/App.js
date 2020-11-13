import React from 'react';
import CtaBtn from './components/ctaBtn';
import QuestionCard from './components/questionCard';
import './App.css';

function App() {
  const [questions, setQuestions] = React.useState({
    questionsAsked: [],
    currentQuestion: '',
  });
  const questionPool = [
    'What is your favorite animal?',
    'What is your favorite food?',
    'What are your goals in life?',
    'What are you afraid of the most?',
    'Friends or family?',
    'What is your favorite color?',
    'What is your favorite movie?',
    'What is your favorite TV show?',
  ];

  const handleNextQuestion = (questions) => {
    while (questions.questionsAsked.length < questionPool.length) {
      const randomIndex = Math.floor(Math.random() * questionPool.length);
      const randomQuestion = questionPool[randomIndex];
      if (questions.questionsAsked.indexOf(randomQuestion) === -1) {
        const newState = {
          questionsAsked: [...questions.questionsAsked, randomQuestion],
          currentQuestion: randomQuestion,
        };
        setQuestions(newState);
        return;
      }
    }
  };
  const allQuestionsAsked =
    questions.questionsAsked.length === questionPool.length ? true : false;
  return (
    <div className='App'>
      <QuestionCard question={questions.currentQuestion} />
      <CtaBtn
        cta='Next'
        onHandleClick={() => handleNextQuestion(questions)}
        isDisabled={allQuestionsAsked}
      />
      {allQuestionsAsked && (
        <p style={{ color: '#eee', fontWeight: 'bold' }}>
          No more questions available ... 🤷🏻‍♂️
        </p>
      )}
    </div>
  );
}

export default App;
