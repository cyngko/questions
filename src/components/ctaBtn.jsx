import React from 'react';

export default function CtaBtn({ cta, onHandleClick, isDisabled }) {
  const disabledStyling = {
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? '0.5' : 1,
  };
  return (
    <button
      disabled={isDisabled}
      style={disabledStyling}
      onClick={() => onHandleClick()}
      className='CtaBtn'>
      {cta}
    </button>
  );
}
