'use client'; // used in nextjs

import React, { ComponentPropsWithRef, ComponentPropsWithoutRef, useRef, RefObject } from 'react';

type ButtonWithRefProps = ComponentPropsWithRef<'button'> & {
  btnRef: RefObject<HTMLButtonElement>;
  variant?: 'primary' | 'secondary';
};

const ButtonWithRef = ({ type, autoFocus, className, btnRef, variant }: ButtonWithRefProps) => {
  return (
    <button
      type={type}
      autoFocus={autoFocus}
      className={className}
      ref={btnRef}>
      {variant === 'primary' ? 'Primary' : 'Secondary'}
    </button>
  );
};

type ButtonWithoutRefProps = ComponentPropsWithoutRef<'button'>;

const ButtonWithoutRef = ({ type, autoFocus, className }: ButtonWithoutRefProps) => {
  return (
    <button
      type={type}
      autoFocus={autoFocus}
      className={className}>
      No Ref
    </button>
  );
};

export default function ComponentsWithAndWithoutRef() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <section className='space-x-4 space-y-4'>
      <ButtonWithRef
        autoFocus={true}
        type='submit'
        className='px-4 py-2 rounded bg-blue-400'
        btnRef={buttonRef}
        variant='primary'
      />

      <ButtonWithoutRef
        autoFocus={false}
        type='button'
        className='px-4 py-2 rounded bg-green-400'
      />
    </section>
  );
}
