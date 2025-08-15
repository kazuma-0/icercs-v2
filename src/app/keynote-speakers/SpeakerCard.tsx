'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SpeakerCardProps {
  speaker: {
    name: string;
    title: string;
    university: string;
    image: string;
  };
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const [imgSrc, setImgSrc] = useState(speaker.image);

  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500 relative">
        <Image
          src={imgSrc}
          alt={speaker.name}
          width={160}
          height={160}
          className="object-cover w-full h-full"
          onError={() => setImgSrc('/placeholder-avatar.png')}
          unoptimized
        />
      </div>
      <h3 className="mt-4 text-lg font-bold uppercase text-white">
        {speaker.name}
      </h3>
      <p className="text-sm mt-1 text-gray-300">{speaker.title}</p>
      {speaker.university && (
        <p className="text-sm max-w-xs text-gray-300">
          {speaker.university}
        </p>
      )}
    </div>
  );
}
