'use client';

import React, { useEffect } from 'react';

export default function Unknown() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: unknown = await response.json();
      console.log('data:', data);
    };

    getData();
  }, []);
  return <div>Unknown</div>;
}
