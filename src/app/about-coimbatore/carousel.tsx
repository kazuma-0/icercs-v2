/* eslint-disable @next/next/no-img-element */
'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
export default function CarouselComponent() {
  const [index, setIndex] = useState(1);
  const handleNext = () => {
    if (index == 15) {
      setIndex(1);
      return;
    }
    setIndex(index + 1);
  };
  const handleBack = () => {
    if (index == 1) {
      setIndex(15);
      return;
    }
    setIndex(index - 1);
  };
  return (
    <div className='select-none h-screen flex items-center justify-center w-full container mx-auto py-10'>
      <div className=' h-full w-full relative'>
        <div
          onClick={handleBack}
          className='cursor-pointer absolute top-0 left-0 h-full w-14 bg-black/40 hover:bg-black/50 transition-all flex items-center justify-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='text-white icon icon-tabler icons-tabler-outline icon-tabler-arrow-left'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l14 0' />
            <path d='M5 12l6 6' />
            <path d='M5 12l6 -6' />
          </svg>
        </div>
        <div
          onClick={handleNext}
          className='cursor-pointer absolute top-0 right-0 h-full w-14 bg-black/40 hover:bg-black/50 transition-all flex items-center justify-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='text-white icon icon-tabler icons-tabler-outline icon-tabler-arrow-right'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l14 0' />
            <path d='M13 18l6 -6' />
            <path d='M13 6l6 6' />
          </svg>
        </div>
        <img
          src={`/images/tourism/${index}.jpg`}
          className='w-full h-full object-cover'
          alt=''
        />
      </div>
    </div>
  );
}
