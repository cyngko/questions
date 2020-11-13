import React from 'react';

export default function CtaBtn({ cta, onHandleClick, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      onClick={() => onHandleClick()}
      className='CtaBtn'>
      {cta}
    </button>
  );
}
