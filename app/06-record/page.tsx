import React from 'react';

type ButtonProps = {
  padding: Record<string, number>;
};

function Button({ padding }: ButtonProps) {
  const { top, right, bottom, left } = padding;
  return (
    <>
      <button
        className='bg-cyan-500 rounded text-white'
        style={{
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
        }}>
        Click me
      </button>
    </>
  );
}

type UserInfo = 'username' | 'email' | 'age';
type UserProfile = Record<UserInfo, string | number>;

function UserComponent({ userInfo }: { userInfo: UserProfile }) {
  return (
    <div>
      <h1>{userInfo.age}</h1>
      <h1>{userInfo.email}</h1>
      <h1>{userInfo.username}</h1>
    </div>
  );
}

export default function RecordComponent() {
  const validUserProfile: UserProfile = {
    username: 'ariel',
    email: 'ariel@example.com',
    age: 20,
  };

  return (
    <section className='space-y-4'>
      <Button padding={{ top: 5, right: 10, bottom: 5, left: 10 }} />
      <UserComponent userInfo={validUserProfile} />
    </section>
  );
}
