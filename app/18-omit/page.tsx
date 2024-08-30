import React from 'react';

type User = {
  sessionId: string;
  name: number;
};

type Guest = Omit<User, 'name'>;

export default function Omit({ sessionId = '123456789' }: Guest) {
  return <section>{sessionId}</section>;
}
