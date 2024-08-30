import React from 'react';

import { type Color } from '../lib/types';

type TextProps = {
  color: Color;
  fontSize: 'text-sm' | 'text-2xl';
  children: React.ReactNode;
};

const Text = ({ color, fontSize, children }: TextProps) => {
  return <h1 className={`${color} ${fontSize}`}>{children}</h1>;
};

export default function TypeFile() {
  return (
    <Text
      color='bg-blue-400'
      fontSize='text-2xl'>
      Type File
    </Text>
  );
}
