import React from 'react';

// type Color = 'white' | 'black' | 'red';

// type ButtonProps = {
//   style: {
//     textColor: Color;
//     backgroundColor: Color;
//   };
// };

type ButtonProps = {
  style: React.CSSProperties;
};

function Button({ style }: ButtonProps) {
  return <button style={style}>Click here</button>;
}

export default function ReactComponentsCss(): JSX.Element {
  return (
    <section>
      {/* <Button
        style={{
          textColor: 'white',
          backgroundColor: 'black',
        }}
      /> */}

      <Button
        style={{
          color: 'white',
          backgroundColor: 'green',
          padding: '4px 8px',
          borderRadius: '4px',
        }}
      />
    </section>
  );
}
