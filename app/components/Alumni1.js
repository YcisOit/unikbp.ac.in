'use client';
import React from 'react';
import Image from 'next/image';

const Alumni1 = () => {
  const alumni1 = [
    { id: 1, image: '/images/alumni1.jpg', title: 'Priyanka M.Mohite' },
    { id: 2, image: '/images/alumni2.jpg', title: 'Sunita Mane' },
    { id: 3, image: '/images/alumni3.png', title: 'Shubhash Bhosale' },
    { id: 4, image: '/images/alumni4.png', title: 'Dhairyashil Bhosale' },
    { id: 5, image: '/images/alumni5.png', title: 'Suhas Mohite' },
  ];

  return (
    <section className="mt-5 mb-5 bg-gray-200 p-10">
      <div>
        <h1 className="text-3xl font-bold font-serif text-center text-[#940e5c] mb-8">
          Eminent Alumni of UNIKBP
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-5">
        {alumni1.map((a) => (
          <div
            key={a.id}
            className="flex flex-col justify-center items-center space-y-4 p-5 rounded-3xl bg-gray-50 hover:scale-105 transform transition duration-300"
          >
            <Image
              src={a.image}
              alt={a.title}
              width={160}
              height={160}
              className="border-4 border-white rounded-full object-cover h-40 w-40 shadow-2xl"
            />
            <p className="text-center font-semibold text-xl">{a.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni1;
