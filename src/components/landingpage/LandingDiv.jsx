import React from 'react';

export default function LandingDiv() {
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[1100px] text-white">
      <a href="/" className="colorRed text-xl font-bold tracking-wide mb-4 uppercase leading-7">Hey there, my name is Marc</a>
      <h1 className="text-6xl mb-8 mt-2">I&apos;m a Software Developer @ adesso SE.</h1>
      <h3 className="text-3xl mb-2">
        Also teaching myself about Software Developing and sometimes I post random stuff on my
        {' '}
        <a href="/blog" className="hover:underline">Blog</a>
        .
      </h3>
    </div>
  );
}
