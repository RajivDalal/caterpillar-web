import React from 'react';
import Calendar from '../../../components/ui/calendar';
import SignIn from '../../../components/sign-in';

const RightSideDiv= () => {
  return (
    <>
    <div className="fixed right-0 top-0 h-full bg-white py-[4rem] shadow-md overflow-auto">
      <SignIn />
      <Calendar/>
    </div>
    </>
  );
};

export default RightSideDiv;
