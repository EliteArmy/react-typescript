import React from 'react';

type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return <h1 className='font-bold text-4xl'>{children}</h1>;
}

type IconProps = {
  children: JSX.Element;
};
function Icon({ children }: IconProps) {
  return <button>{children}</button>;
}

export default function TypingChildren() {
  const icon = <i>&#10003;</i>; // JSX element
  return (
    <section className='space-y-4'>
      <Title>Awesome title</Title>

      <Icon>{icon}</Icon>
    </section>
  );
}
