import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-white bg-background">
      <h1 className="mb-8 text-4xl font-bold md:text-6xl text-neon">About Me</h1>
      <p className="max-w-3xl text-lg leading-relaxed text-center md:text-2xl">
        Hey! I’m an Electronic Dance Music (EDM) producer with a passion for creating beats that make people move. 
        My journey started years ago, and since then, I’ve been experimenting with different genres and sounds to craft my unique style.
      </p>
      <p className="max-w-3xl mt-4 text-lg leading-relaxed text-center md:text-2xl">
        From heavy drops to melodic vibes, I love blending diverse elements to create tracks that resonate with the audience. 
        Check out my latest tracks and feel the energy for yourself!
      </p>
    </div>
  );
}
