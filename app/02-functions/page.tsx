import React from 'react';

export default function Functions() {
  function saveNewUser(name: string, age: number): boolean {
    console.log('age:', age);
    console.log('name:', name);
    return true;
  }
  console.log(saveNewUser('John', 10));

  // console.log(saveNewUser(1, 10)); // This will throw a warning.

  return (
    <section>
      <h1>Hello World</h1>
    </section>
  );
}
