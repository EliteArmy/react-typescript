'use client'; // used in nextjs

import React, { useEffect } from 'react';

type ThemeColor = 'dark' | 'white';

export default function AsAssertion() {
  const getTheme = localStorage.getItem('themeColor') as ThemeColor;

  useEffect(() => {
    const getTheme = localStorage.getItem('themeColor') as ThemeColor;

    if (!getTheme) {
      localStorage.setItem('themeColor', 'dark');
    }
  }, []);

  const handleTheme = () => {
    if (getTheme === 'dark') {
      localStorage.setItem('themeColor', 'white');
    } else {
      localStorage.setItem('themeColor', 'dark');
    }
  };

  return <button onClick={handleTheme}>{getTheme}</button>;
}
