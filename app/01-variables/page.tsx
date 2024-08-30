import React from 'react';
import Link from 'next/link';

export default function Variables() {
  let randomNumber = 42;
  let url = 'https://www.google.com';
  let isTrue = true;

  return (
    <section className='space-y-4'>
      <Link href={url}>Text: {url}</Link>
      <p>Number: {randomNumber}</p>
      <p>Boolean: {isTrue + ''}</p>
    </section>
  );
}
