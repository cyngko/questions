import React from 'react';

export default function QuestionCard({ question }) {
  return (
    <div className='QuestionCard'>
      <p className='Question'>
        {question === ''
          ? 'Click the button to starte the generator!'
          : question}
      </p>
    </div>
  );
}
