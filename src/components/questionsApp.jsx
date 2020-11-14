import React from 'react';
import QuestionCard from './questionCard';
import CtaContainer from './ctaContainer';

function QuestionsApp() {
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
  const handlePreviousQuestion = () => {
    const currentIndex = questionPool.indexOf(questions.currentQuestion);
    console.log(currentIndex);
  };
  const allQuestionsAsked =
    questions.questionsAsked.length === questionPool.length ? true : false;
  return (
    <div className='QuestionsApp'>
      <QuestionCard question={questions.currentQuestion} />
      <CtaContainer
        onHandleClick={() => handleNextQuestion(questions)}
        isDisabled={allQuestionsAsked}
      />

      {allQuestionsAsked && (
        <p
          style={{
            color: '#282c34',
            padding: '10px 15px',
            borderRadius: '10px',
            backgroundColor: '#eee',
          }}>
          No more questions available ... 🤷🏻‍♂️
        </p>
      )}
    </div>
  );
}

export default QuestionsApp;
