import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-home">
      <h1 className="text-5xl font-extrabold md:text-7xl text-neon animate-pulse">Welcome to My EDM Portfolio</h1>

      <p className="max-w-2xl mt-6 text-lg text-center text-white md:text-2xl">
        Explore my journey as an EDM music producer, discover my latest tracks, and get in touch.
      </p>
      <div className="mt-10">
        <a
          href="/tracks"
          className="px-6 py-3 text-lg transition-colors duration-300 border-2 rounded-full text-neon border-neon md:text-xl hover:bg-neon hover:text-background"
        >
          Listen to My Tracks
        </a>
      </div>
    </div>
  );
}
