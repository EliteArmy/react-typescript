'use client'; // used in nextjs

import React from 'react';

// Using interfaces instead of Type:
// interface ButtonProps {
//   type: 'button' | 'submit' | 'reset';
//   color: 'bg-green-400' | 'bg-red-400' | 'bg-blue-400';
// }

// interface ButtonWithSize extends ButtonProps {
//   size: 'sm' | 'md' | 'lg';
// }

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  color: 'bg-green-400' | 'bg-red-400' | 'bg-blue-400';
};

type ButtonWithSize = ButtonProps & {
  size: 'sm' | 'md' | 'lg';
};

const ButtonWithSIze = ({ color, type, size }: ButtonWithSize) => {
  const getSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'px-2 py-2';
      case 'md':
        return 'px-4 py-4';
      case 'lg':
        return 'px-6 py-6';
    }
  };

  return (
    <button
      type={type}
      className={`rounded ${color} ${getSize(size)}`}>
      click me
    </button>
  );
};

export default function InterceptAndExtends() {
  return (
    <section>
      <ButtonWithSIze
        type='button'
        color='bg-blue-400'
        size='lg'
      />
    </section>
  );
}
