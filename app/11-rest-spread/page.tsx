'use client'; // used in nextjs

import React, { ComponentPropsWithoutRef, useRef } from 'react';

type ButtonWithoutRefProps = ComponentPropsWithoutRef<'button'>;

const ButtonWithoutRef = ({
  type,
  autoFocus,
  className,
  ...props
}: ButtonWithoutRefProps) => {
  return (
    <button
      type={type}
      autoFocus={autoFocus}
      className={className}
      {...props}>
      Spread and Rest
    </button>
  );
};

export default function RestAndSpread() {
  return (
    <section className='space-x-4 space-y-4'>
      <ButtonWithoutRef
        autoFocus={false}
        type='button'
        className='px-4 py-2 rounded bg-green-400'
      />
    </section>
  );
}
