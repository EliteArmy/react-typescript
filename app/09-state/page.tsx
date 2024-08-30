'use client'; // used in nextjs

import React, { useState } from 'react';

type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ setCount }: ButtonProps) => {
  return (
    <button
      className='px-4 py-2 rounded bg-blue-400'
      onClick={() => setCount((prev) => prev + 1)}>
      Click me
    </button>
  );
};

export default function State() {
  const [count, setCount] = useState(0);

  return (
    <section className='space-y-4'>
      <h1>Count: {count}</h1>
      <Button setCount={setCount} />
    </section>
  );
}
