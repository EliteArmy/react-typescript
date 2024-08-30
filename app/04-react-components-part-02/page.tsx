import React from 'react';

type Color = 'white' | 'black' | 'red';

type ButtonProps = {
  textColor: Color;
  backgroundColor: Color;
  size: number;
  isLoading: boolean;
  margin: number[];
  padding: [number, number, number, number];
  data: { id: string }[];
};

function Button({
  textColor,
  size,
  isLoading,
  backgroundColor,
  margin,
  padding,
}: ButtonProps) {
  return (
    <button
      style={{
        fontSize: `${size}px`,
        backgroundColor: backgroundColor,
        color: textColor,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
      }}
      className='rounded border-solid border-indigo-600 border-2'>
      {isLoading ? 'Loading' : 'Click Here'}
    </button>
  );
}

export default function ReactComponentsPartTwo(): JSX.Element {
  return (
    <section>
      <Button
        textColor='white'
        backgroundColor='black'
        isLoading={false}
        size={16}
        margin={[2, 2, 2, 2]}
        padding={[4, 8, 4, 8]}
        data={[{ id: '123' }, { id: '124' }]}
      />
    </section>
  );
}
