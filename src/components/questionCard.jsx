import React from 'react';

export default function QuestionCard({ question }) {
  return (
    <div className='QuestionCard'>
      <h4 className='Question'>
        {question === ''
          ? 'Click the button to starte the generator!'
          : question}
      </h4>
    </div>
  );
}
