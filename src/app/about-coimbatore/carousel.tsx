/* eslint-disable @next/next/no-img-element */
"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

export default function CarouselComponent() {
  const [index, setIndex] = useState(1);

  const descriptions = [
    "Isha Yoga Center, Coimbatore: A serene place for yoga and meditation, known for its unique design and tranquil environment.",
    "Tranquil Yoga & Meditation Retreats, Coimbatore: Offers a peaceful retreat experience with various yoga and meditation programs amidst nature.",
    "Dhyana Lingam, Coimbatore: A spiritual center dedicated to meditation and self-realization, featuring a grand temple and beautiful surroundings.",
    "Aaliyar Dam, Coimbatore: A picturesque dam surrounded by lush greenery, perfect for picnics and enjoying nature.",
    "Aaliyar Dam Reservoir, Coimbatore: The reservoir provides scenic views and opportunities for boating and relaxing by the water.",
    "BlackThunder, Coimbatore: A popular water theme park offering thrilling rides, wave pools, and family-friendly attractions.",
    "Clock Tower (Manikoondu), Coimbatore: A historic landmark featuring a classic clock tower, reflecting the city's architectural heritage.",
    "Siruvaani Waterfalls, Coimbatore: A beautiful waterfall nestled in the hills, known for its refreshing waters and scenic hiking trails.",
    "Kovai Kutralam, Coimbatore: A picturesque waterfall and a popular destination for nature lovers, surrounded by lush greenery.",
    "CODISSIA E Hall, Coimbatore: A prominent exhibition center hosting various trade fairs, exhibitions, and events.",
    "CODISSIA Trade Fair Complex, Coimbatore: A large venue for trade fairs and exhibitions, showcasing products and services from various industries.",
    "Media Tree (Fountain Light Tower), Coimbatore: An iconic landmark featuring a fountain and light tower, known for its vibrant nighttime displays.",
    "RaceCourse, Coimbatore: Race Course Walking Trail is a 2.4-mile distance and 5,500 steps walking trail.",
    "Ukkadam-Valankulam Lake, Coimbatore: A scenic lake offering a tranquil escape with opportunities for boating and relaxing by the water.",
    "Vaalparai, Coimbatore: A beautiful hill station known for its tea estates, scenic landscapes, and pleasant climate.",
  ];


  const handleNext = () => {
    if (index === 15) {
      setIndex(1);
      return;
    }
    setIndex(index + 1);
  };

  const handleBack = () => {
    if (index === 1) {
      setIndex(15);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <div className="select-none h-screen flex items-center justify-center w-full container mx-auto py-10">
      <div className="h-full w-full relative">
        <div
          onClick={handleBack}
          className="cursor-pointer absolute top-0 left-0 h-full w-14 bg-black/40 hover:bg-black/50 transition-all flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </div>
        <div
          onClick={handleNext}
          className="cursor-pointer absolute top-0 right-0 h-full w-14 bg-black/40 hover:bg-black/50 transition-all flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </div>
        <img
          src={`/images/tourism/${index}.jpg`}
          className="w-full h-full object-cover"
          alt={`Image ${index}`}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
          {descriptions[index - 1]}
        </div>
      </div>
    </div>
  );
}
