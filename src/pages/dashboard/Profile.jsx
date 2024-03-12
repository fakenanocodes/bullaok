import React from 'react';
import ProfileComponent from '../../components/Dashboard/ProfileComponent';

export default function Profile() {
  return (
    <div className="bg-white overflow-y-scroll no-scrollbar  h-[100vh]">
      <div className="bg-[#8E0789] h-8 xl:hidden md:hidden block"></div>
      <div className="py-6">
        <ProfileComponent />
      </div>
    </div>
  );
}
