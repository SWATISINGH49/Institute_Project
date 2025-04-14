import React from 'react';

function Study() {
  const resources = [
    {
      title: 'Notes',
      description:
        'Access expertly curated study notes by WITS Education, designed to simplify complex topics with clear, concise explanations.',
      bgColor: 'bg-blue-100',
      img: '/mnt/data/image.png', // Update with actual image path or URL
    },
    {
      title: 'Reference Books',
      description:
        'Explore a comprehensive collection of reference materials developed by academic professionals to support in-depth learning.',
      bgColor: 'bg-yellow-100',
      img: '/mnt/data/image.png',
    },
    {
      title: 'Pyq Solutions',
      description:
        'Master core concepts with WITS Education’s step-by-step NCERT solutions tailored for a thorough understanding of every topic.',
      bgColor: 'bg-green-100',
      img: '/mnt/data/image.png',
    },
  ];

  return (
    <div className="py-12 px-4 md:px-16 bg-[#fefefe]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Study Resources</h2>
        <p className="text-gray-600 text-lg">
          A diverse range of expertly developed learning resources to elevate your academic success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((res, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 flex flex-col justify-between ${res.bgColor}`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{res.title}</h3>
              <p className="text-gray-700">{res.description}</p>
            </div>
            <div className="mt-6 flex justify-center">
              <img
                src={res.img}
                alt={res.title}
                className="max-h-32 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Study;
