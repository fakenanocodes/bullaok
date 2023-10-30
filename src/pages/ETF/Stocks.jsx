import React from 'react';

export default function Stocks() {
  return (
    <section className="flex justify-center stocks py-8">
      <div className="flex flex-col items-center text-[#fff] gap-3">
        <h2 className="text-3xl">Get up to 12 free stocks today</h2>
        <div className="text-center">
          <h3 className="font-bold text-xl">Limited Time Offer</h3>
          <p className="w-96">
            Get up to 12 free stocks when you open and fund a new account. Each
            free stock is valued from $3 to $3000.
          </p>
          <button className="text-[#000] bg-transparent">Learn more {'>'} </button>
        </div>
        <button className="mt-3 bg-[#0D86ff] rounded-lg p-3">Open an account</button>
      </div>
    </section>
  );
}
