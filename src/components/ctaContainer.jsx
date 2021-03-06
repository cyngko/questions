import React from 'react';
import CtaBtn from './ctaBtn';

export default function CtaContainer({
  onHandleNextQuestion,
  onHandlePreviousQuestion,
  isNextDisabled,
  isPrevDisabled,
}) {
  const prevArrow = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-arrow-left-circle'>
      <circle cx='12' cy='12' r='10'></circle>
      <polyline points='12 8 8 12 12 16'></polyline>
      <line x1='16' y1='12' x2='8' y2='12'></line>
    </svg>
  );
  const nextArrow = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-arrow-right-circle'>
      <circle cx='12' cy='12' r='10'></circle>
      <polyline points='12 16 16 12 12 8'></polyline>
      <line x1='8' y1='12' x2='16' y2='12'></line>
    </svg>
  );
  return (
    <div className='CtaContainer'>
      <CtaBtn
        cta={prevArrow}
        aria-label='Previous'
        onHandleClick={onHandlePreviousQuestion}
        isDisabled={isPrevDisabled}
      />
      <CtaBtn
        cta={nextArrow}
        aria-label='Next'
        onHandleClick={onHandleNextQuestion}
        isDisabled={isNextDisabled}
      />
    </div>
  );
}
