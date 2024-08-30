'use client'; // used in nextjs

import React, { MouseEventHandler, ChangeEvent, useState, MouseEvent } from 'react';

type ComponentProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Component = ({ onClick }: ComponentProps) => {
  return <button onClick={onClick}>You clicked me</button>;
};

export default function EventHandlers() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    console.log('inputValue:', inputValue, 'event:', event.target);

  return (
    <section className='space-y-4 space-x-4'>
      <input
        className='text-cyan-500'
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>Click me</button>
      <br />
      <input onChange={(e) => console.log(e.target.value)} />
      <Component onClick={(e) => console.log(e)} />
    </section>
  );
}
