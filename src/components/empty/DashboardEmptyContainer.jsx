import React from 'react';
import { images } from '../../assets';

export default function DashboardEmptyContainer({ message }) {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <h2 className="font-bold text-xl">{message}</h2>
      <img src={images.empty} className="w-64 h-auto" alt="" />
    </div>
  );
}
