import React from 'react';
import QuestionCard from './questionCard';
import CtaContainer from './ctaContainer';

function QuestionsApp() {
  const questionPool = [
    'What is your favorite animal?',
    'What is your favorite food?',
    'What are your goals in life?',
    'What are you afraid of the most?',
    'Friends or family?',
    'What is your favorite color?',
    'What is your favorite movie?',
    'What is your favorite TV show?',
    'Who is your favorite actor/actress?',
  ];

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const [questions, setQuestions] = React.useState({
    questionsAsked: shuffle(questionPool),
    currentQuestion: '',
  });

  const handleNextQuestion = (questions) => {
    if (questions.currentQuestion === '') {
      setQuestions({
        ...questions,
        currentQuestion: questions.questionsAsked[0],
      });
    } else {
      const currentIndex = questions.questionsAsked.indexOf(
        questions.currentQuestion
      );
      if (currentIndex < questions.questionsAsked.length - 1) {
        setQuestions({
          ...questions,
          currentQuestion: questions.questionsAsked[currentIndex + 1],
        });
      }
    }
  };
  const handlePreviousQuestion = () => {
    const currentIndex = questions.questionsAsked.indexOf(
      questions.currentQuestion
    );
    if (currentIndex !== 0 || questions.currentQuestion !== '') {
      setQuestions({
        ...questions,
        currentQuestion: questions.questionsAsked[currentIndex - 1],
      });
    }
  };

  const nextBtnDisabled =
    questions.questionsAsked.length - 1 ===
    questions.questionsAsked.indexOf(questions.currentQuestion)
      ? true
      : false;
  const prevBtnDisabled =
    questions.questionsAsked.indexOf(questions.currentQuestion) <= 0
      ? true
      : false;
  return (
    <div className='QuestionsApp'>
      <QuestionCard question={questions.currentQuestion} />
      <CtaContainer
        onHandleNextQuestion={() => handleNextQuestion(questions)}
        onHandlePreviousQuestion={() => handlePreviousQuestion(questions)}
        isNextDisabled={nextBtnDisabled}
        isPrevDisabled={prevBtnDisabled}
      />

      {nextBtnDisabled && (
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
