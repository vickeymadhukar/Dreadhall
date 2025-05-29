import React from 'react'

const Card = ({ title, description, className = "" }) => {
  return (
    <div className={`relative bg-[#171528] rounded-2xl border-2 border-amber-50 shadow-md p-6 max-w-md flex flex-col items-center  justify-center text-center   ${className}`}>
      <h2 className=" absolute text-4xl font-bold mb-2 top-[10%]  text-white">{title}</h2>
      <p className="absolute p-[10px] text-[#ded6d6]  text-3xl">{description}</p>
    </div>
  );
};
export default Card
