'use client'; // used in nextjs

import React, { useRef } from 'react';

export default function HooksUseRef() {
  const ref = useRef<Element>(null);
  const ref2 = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const numberRef = useRef<number>();
  console.log('numberRef:', numberRef?.current);

  const stringRef = useRef<string>('Hello World');
  console.log('stringRef:', stringRef.current);

  return <button ref={buttonRef}>Click</button>;
}
