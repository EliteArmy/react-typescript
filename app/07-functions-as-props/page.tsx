'use client'; // used in nextjs

import React from 'react';

type ButtonProps = {
  onButtonClick: () => void;
  smallCalculation: (numberToAdd: number) => number;
};

function Button({ onButtonClick, smallCalculation }: ButtonProps) {
  console.log(smallCalculation(40));
  return (
    <section>
      <button
        className='px-4 py-2 rounded bg-green-500'
        onClick={onButtonClick}>
        Click me
      </button>
    </section>
  );
}

export default function FunctionsComponent() {
  const handleButtonClick = () => {
    console.log('You clicked me!');
  };

  const smallCalculation = (numberToAdd: number) => {
    return 2 + numberToAdd;
  };

  return (
    <section>
      <Button
        onButtonClick={handleButtonClick}
        smallCalculation={smallCalculation}
      />
    </section>
  );
}
