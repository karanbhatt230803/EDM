// import React from 'react';

// export default function Tracks() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-6 text-white bg-background">
//       <h1 className="mb-8 text-4xl font-bold md:text-6xl text-neon">My Tracks</h1>
//       <p className="max-w-3xl mb-8 text-lg leading-relaxed text-center md:text-2xl">
//         Here are some of my latest tracks. Feel free to listen and groove to the beats!
//       </p>
      
//       <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
//         <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-40">
//           <h2 className="mb-2 text-2xl font-bold text-neon">Track 1: Neon Beats</h2>
//           <audio controls className="w-full mt-4">
//             <source src="/assets/audio/phonk.mp3" type="audio/mp3" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>

//         <div className="p-6 bg-black rounded-lg shadow-lg bg-opacity-40">
//           <h2 className="mb-2 text-2xl font-bold text-neon">Track 2: Electric Dreams</h2>
//           <audio controls className="w-full mt-4">
//             <source src="/assets/audio/phonk.mp3" type="audio/mp3" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>

//         {/* Add more tracks in a similar manner */}
//       </div>
//     </div>
//   );
// }


// Add this line at the very top of your file
"use client";

import React, { useState } from 'react';

export default function Tracks() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const tracks = [
    { id: 1, artist: 'KARAN BHATT', title: 'BARCELONA', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 2, artist: 'KARAN BHATT', title: 'CLUB MIX', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 3, artist: 'KARAN BHATT', title: 'HUSTLE', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 4, artist: 'KARAN BHATT', title: 'SUNRISE', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 5, artist: 'KARAN BHATT', title: 'CHILL VIBES', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 6, artist: 'KARAN BHATT', title: 'NIGHT OUT', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 7, artist: 'KARAN BHATT', title: 'SUMMER VIBES', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 8, artist: 'KARAN BHATT', title: 'WINTER BEATS', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 9, artist: 'KARAN BHATT', title: 'FESTIVAL ANTHEM', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 10, artist: 'KARAN BHATT', title: 'AFTER HOURS', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  // Add more tracks as needed...
  { id: 11, artist: 'KARAN BHATT', title: 'FALL BACK', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 12, artist: 'KARAN BHATT', title: 'NIGHT DRIFT', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 13, artist: 'KARAN BHATT', title: 'DEEP CUT', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 14, artist: 'KARAN BHATT', title: 'BEAT DROP', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 15, artist: 'KARAN BHATT', title: 'SLOW JAMS', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 16, artist: 'KARAN BHATT', title: 'LAST CALL', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 17, artist: 'KARAN BHATT', title: 'MOOD SWINGS', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 18, artist: 'KARAN BHATT', title: 'COLD NIGHT', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 19, artist: 'KARAN BHATT', title: 'DANCE FLOOR', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 20, artist: 'KARAN BHATT', title: 'VIBE CHECK', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 21, artist: 'KARAN BHATT', title: 'SPINNING', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 22, artist: 'KARAN BHATT', title: 'WILD NIGHTS', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 23, artist: 'KARAN BHATT', title: 'BOLD MOVES', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 24, artist: 'KARAN BHATT', title: 'ECHOES', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 25, artist: 'KARAN BHATT', title: 'TRAP HOUSE', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 26, artist: 'KARAN BHATT', title: 'REPLAY', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 27, artist: 'KARAN BHATT', title: 'AFTER PARTY', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 28, artist: 'KARAN BHATT', title: 'BASSLINE', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 29, artist: 'KARAN BHATT', title: 'FUTURE VIBES', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 30, artist: 'KARAN BHATT', title: 'REVERB', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 31, artist: 'KARAN BHATT', title: 'FRESH BEATS', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 32, artist: 'KARAN BHATT', title: 'SPACED OUT', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 33, artist: 'KARAN BHATT', title: 'RAPID FIRE', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 34, artist: 'KARAN BHATT', title: 'NEON LIGHTS', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 35, artist: 'KARAN BHATT', title: 'SATURDAY NIGHT', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 36, artist: 'KARAN BHATT', title: 'POWER PLAY', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 37, artist: 'KARAN BHATT', title: 'RAVE ON', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 38, artist: 'KARAN BHATT', title: 'BRAWL', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 39, artist: 'KARAN BHATT', title: 'VORTEX', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 40, artist: 'KARAN BHATT', title: 'REMIX REWIND', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 41, artist: 'KARAN BHATT', title: 'SUMMER BREEZE', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 42, artist: 'KARAN BHATT', title: 'HIGHER STATE', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 43, artist: 'KARAN BHATT', title: 'SHADOW BOXING', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 44, artist: 'KARAN BHATT', title: 'NIGHT RIDER', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 45, artist: 'KARAN BHATT', title: 'IN THE MIX', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 46, artist: 'KARAN BHATT', title: 'DREAMING', genre: 'Rap', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 47, artist: 'KARAN BHATT', title: 'OUT OF CONTROL', genre: 'EDM', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 48, artist: 'KARAN BHATT', title: 'THUNDER STRIKE', genre: 'Drill', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 49, artist: 'KARAN BHATT', title: 'INTO THE LIGHT', genre: 'Big Room', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' },
  { id: 50, artist: 'KARAN BHATT', title: 'NEW HORIZONS', genre: 'Remix', image: '/assets/images/home1.jpg', audio: '/assets/audio/phonk.mp3' }
  ];

  const filters = ['All', 'Rap', 'Drill', 'Big Room', 'EDM', 'Remix', 'Drops', 'Slowed & Reverb', 'Sped Up'];

  const filteredTracks = selectedFilter === 'All'
    ? tracks
    : tracks.filter(track => track.genre === selectedFilter);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-white main-content bg-background">
      <h1 className="mb-8 text-4xl font-bold md:text-6xl text-neon">My Tracks</h1>
      <p className="max-w-3xl mb-8 text-lg leading-relaxed text-center md:text-2xl">
        Here are some of my latest tracks. Feel free to listen and groove to the beats!
      </p>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 font-semibold text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none ${selectedFilter === filter ? 'bg-gray-600' : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Track Cards */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {filteredTracks.map((track) => (
          <div key={track.id} className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <img src={track.image} alt={`${track.title} Cover`} className="w-full rounded-t-lg"/>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">{track.artist}</h2>
              <p className="text-sm">{track.title}</p>
            </div>
            <audio controls className="w-full mt-4">
              <source src={track.audio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <button className="w-full py-2 mt-4 font-semibold text-gray-900 bg-yellow-400 rounded-lg">Listen now</button>
          </div>
        ))}
      </div>
    </div>
  );
}



