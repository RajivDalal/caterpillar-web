import React from 'react';
import Calendar from '../../../components/ui/calendar';
import SignIn from '../../../components/sign-in';

const RightSideDiv= () => {
  return (
    <>
    <div className="float-right h-full bg-white py-[4rem] shadow-md overflow-auto">
      <SignIn />
      <br />
      <Calendar/>
    </div>
    </>
  );
};

export default RightSideDiv;
