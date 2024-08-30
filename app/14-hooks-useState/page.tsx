'use client'; // used in nextjs

import React, { useState } from 'react';

type Cat = {
  name: string;
  age: number;
};

export default function HooksUseState() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('Hello world');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [cat, setCat] = useState<Cat | null>(null);

  const name = cat?.name;

  return (
    <section className='space-y-4'>
      <h1>{name}</h1>
      <button onClick={() => setCat({ name: 'Milo', age: 5 })}>Set Cat</button>
    </section>
  );
}
