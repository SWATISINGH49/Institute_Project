import React from 'react';

const nimcetResults = {
  '2024': [
    {
      rank: 1,
      name: 'Aniket Mani',
      batch: 'NIMCET 2024 BATCH',
    },
    {
      rank: 'AIR-522',
      name: 'Rudra Ranjan ',
      batch: 'NIMCET 2024 BATCH',
    },
    {
      rank: 'AIR-733',
      name: 'Swati',
      batch: 'NIMCET 2024 BATCH',
    },
    {
      rank: 'AIR-829',
      name: 'Anish',
      batch: 'NIMCET 2024 BATCH',
    },
  ],
  '2023': [
    {
      rank: 'Topper',
      name: 'Prabhat (AIR-23)',
      batch: 'NIMCET 2023 BATCH',
    },
    {
      rank: 'Topper',
      name: 'Kundan (AIR-382)',
      batch: 'NIMCET 2023 BATCH',
    },
    {
      rank: 'Topper',
      name: 'Khushboo (AIR-729)',
      batch: 'NIMCET 2023 BATCH',
    },
    {
      rank: 'Topper',
      name: 'Kanchan (NIT Bhopal)',
      batch: 'NIMCET 2023 BATCH',
    },
  ],
};

function Results() {
  return (
    <div className="bg-gray-50 py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">Academic Excellence : NIMCET Results</h2>
      <p className="text-gray-600 mb-6">Giving wings to a million dreams, a million more to go</p>

      <div className="bg-gradient-to-r from-blue-100 to-blue-50 text-black py-8 rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold mb-4">NIMCET Results</h3>
        <span className="italic text-blue-900 font-semibold text-lg">
          Outstanding Performance, Incredible Success!
        </span>

        {Object.entries(nimcetResults).map(([year, toppers]) => (
          <div key={year} className="mt-8">
            <h4 className="text-2xl font-semibold text-indigo-600 mb-4">Year: {year}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
              {toppers.map((topper, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg p-4 shadow-md text-center"
                >
                  <div className="text-yellow-500 font-bold text-lg">
                    {typeof topper.rank === 'number' ? `RANK ${topper.rank}` : topper.rank}
                  </div>
                  <div className="font-semibold text-sm mt-1">{topper.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{topper.batch}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
