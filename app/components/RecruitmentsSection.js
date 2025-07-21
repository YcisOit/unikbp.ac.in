'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function RecruitmentsSection() {
  const scrollRef = useRef(null);

  const companies = [
    { name: 'Nipro', logo: '/logos/nipro.png' },
    { name: 'ACG', logo: '/logos/acg.png' },
    { name: 'TCS', logo: '/logos/tcs.png' },
    { name: 'Accenture', logo: '/logos/accenture.png' },
    { name: 'Reliance', logo: '/logos/reliance.jpg' },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollStep = 1;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;

        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-8 pb-10 text-center p-4">
      <h2 className="text-4xl font-bold font-serif text-[#940e5c] mb-10">
        Our Recruitments
      </h2>
      <div className="relative mx-auto max-w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 px-4 overflow-hidden whitespace-nowrap scrollbar-hide"
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center shadow-md hover:shadow-lg transition"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={150}
                height={100}
                className="object-contain max-h-20 lg:max-h-32"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
