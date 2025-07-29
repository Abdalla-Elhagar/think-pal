
import React from "react";

export default function AbuteTitle() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className=" title text-center flex justify-center items-center flex-col h-[500px]">
          <h1 className="text-[40px] md:text-[50px] font-bold">About ThinkPal</h1>
          <p className="w-full md:w-[600px]">
            We are on a mission to democratize AI education for university
            students across Egypt and the MENA region, fostering the next
            generation of tech leaders.
          </p>
        </div>
      </div>
    </section>
  );
}
