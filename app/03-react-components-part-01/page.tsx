import React from 'react';

function WelcomeMessage(props: { welcomeText: string }) {
  const welcomeText = props.welcomeText;
  return <p>{welcomeText}</p>;
}

function GoodbyeMessage(props: { goodbyeText: string }) {
  // We can use destructuring
  const { goodbyeText } = props;
  return <p>{goodbyeText}</p>;
}

// Or inmediatly destructure the properties you need from props
function RandomNumber({ randomMessage }: { randomMessage: number }) {
  return <p>{randomMessage}</p>;
}

// Sending more than one prop
function MoreProps({
  textColor,
  size,
  isAvailable,
  count = 0,
}: {
  textColor: string;
  size: number;
  isAvailable: boolean;
  count?: number;
}) {
  return (
    <div>
      <p>Text Color: {textColor}</p>
      <p>Size: {size}</p>
      <p>Is Available: {isAvailable + ''}</p>
      <p>Default property: {count}</p>
    </div>
  );
}

type ButtonProps = {
  textColor: string;
  size: number;
  isLoading: boolean;
};

function Button({ textColor, size, isLoading }: ButtonProps) {
  console.log(textColor.toUpperCase());
  // size.toUpperCase(); // This will throw an error because size is of type number

  return (
    <>
      <button
        style={{ fontSize: `${size}px` }}
        className={`${textColor} px-4 py-2 rounded bg-green-500`}>
        {isLoading ? 'Loading...' : 'Click Here'}
      </button>
    </>
  );
}

export default function ReactComponentsPartOne() {
  return (
    <section className='space-y-4'>
      <WelcomeMessage welcomeText='Hello world' />

      <GoodbyeMessage goodbyeText='Nice seeing you!' />

      <RandomNumber randomMessage={42} />

      <MoreProps
        textColor='white'
        size={16}
        isAvailable={true}
      />

      <Button
        textColor='text-white'
        isLoading={false}
        size={16}
      />
    </section>
  );
}
