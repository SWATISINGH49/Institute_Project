import React from 'react';

function It() {
  const events = [
    {
      title: 'PLACEMENT Assistance Program ON',
      subtitle: 'FullStack JAVA',
      dateTime: '10ᵗʰ April, 11:00 AM (IST)',
      img: '/mnt/data/image.png', // Replace with actual path or URL
      bg: 'bg-red-600',
    },
    {
      title: 'DevOps with Multi Cloud',
      subtitle: 'aws + Microsoft Azure + GCP',
      dateTime: '10ᵗʰ April, 7:30 AM (IST)',
      trainer: '',
      bg: 'bg-blue-900',
    },
    {
      title: 'SPRING BOOT & MicroServices',
      subtitle: 'Pre-requisite: Core Java & JDBC',
      dateTime: '10ᵗʰ April, 11:00 AM (IST)',
      trainer: 'Ravi sir',
      bg: 'bg-green-700',
    },
  ];

  return (
    <div className="py-12 px-4 md:px-16 bg-white text-white">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
      At Wits Education, we redefine convenience with customized scheduling options that far exceed the standard offerings of most software training institutes.
      </h2>

      <div className="flex flex-col gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 md:flex justify-between items-center shadow-lg ${event.bg}`}
          >
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-lg mb-2">{event.subtitle}</p>
              <p className="font-medium text-yellow-300">{event.dateTime}</p>
              {event.trainer && (
                <p className="mt-1 text-yellow-100">{event.trainer}</p>
              )}
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
              <img
                src={event.img}
                alt={event.title}
                className="max-h-40 object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default It;
