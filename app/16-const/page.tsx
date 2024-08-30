import React from 'react';

const statuses = ['success', 'error', 'loading'] as const;

export default function Constants() {
  return (
    <section>
      {statuses.map((option) => (
        <h1 key={option}>{option}</h1>
      ))}
    </section>
  );
}
