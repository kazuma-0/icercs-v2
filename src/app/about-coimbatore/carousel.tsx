/* eslint-disable @next/next/no-img-element */
"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useCallback, memo } from "react";

// Define descriptions outside the component to avoid re-creating it on every render
const descriptions = [
  "Isha Yoga Center, Coimbatore: A serene place for yoga and meditation, known for its unique design and tranquil environment. Distance from KAHE: 30 km.",
  "Tranquil Yoga & Meditation Retreats, Coimbatore: Offers a peaceful retreat experience with various yoga and meditation programs amidst nature. Distance from KAHE: 25 km.",
  "Dhyana Lingam, Coimbatore: A spiritual center dedicated to meditation and self-realization, featuring a grand temple and beautiful surroundings. Distance from KAHE: 32 km.",
  "Aaliyar Dam, Coimbatore: A picturesque dam surrounded by lush greenery, perfect for picnics and enjoying nature. Distance from KAHE: 45 km.",
  "Ooty forms part of the Nilgiri Biosphere Reserve, the largest protected forest area in India. Distance from KAHE: 80 km.",
  "BlackThunder, Coimbatore: A popular water theme park offering thrilling rides, wave pools, and family-friendly attractions. Distance from KAHE: 50 km.",
  "Clock Tower (Manikoondu), Coimbatore: A historic landmark featuring a classic clock tower, reflecting the city's architectural heritage. Distance from KAHE: 20 km.",
  "Siruvaani Waterfalls, Coimbatore: A beautiful waterfall nestled in the hills, known for its refreshing waters and scenic hiking trails. Distance from KAHE: 35 km.",
  "Kovai Kutralam, Coimbatore: A picturesque waterfall and a popular destination for nature lovers, surrounded by lush greenery. Distance from KAHE: 30 km.",
  "CODISSIA E Hall, Coimbatore: A prominent exhibition center hosting various trade fairs, exhibitions, and events. Distance from KAHE: 22 km.",
  "CODISSIA Trade Fair Complex, Coimbatore: A large venue for trade fairs and exhibitions, showcasing products and services from various industries. Distance from KAHE: 22 km.",
  "Media Tree (Fountain Light Tower), Coimbatore: An iconic landmark featuring a fountain and light tower, known for its vibrant nighttime displays. Distance from KAHE: 18 km.",
  "RaceCourse, Coimbatore: Race Course Walking Trail is a 2.4-mile distance and 5,500 steps walking trail. Distance from KAHE: 17 km.",
  "Ukkadam-Valankulam Lake, Coimbatore: A scenic lake offering a tranquil escape with opportunities for boating and relaxing by the water. Distance from KAHE: 16 km.",
  "Vaalparai, Coimbatore: A beautiful hill station known for its tea estates, scenic landscapes, and pleasant climate. Distance from KAHE: 70 km.",
  "The Marudhamalai Murugan Temple, is a popular 12th-century hill temple situated in Coimbatore, Tamil Nadu, India. Distance from KAHE: 40 km.",
  "Experimenta Science Centre - STEM Lab offers an interactive learning experience in the field of STEM (Science, Technology, Engineering and Mathematics). It is the first of its kind in South India, providing hands-on opportunities for students of all ages from schools and colleges in a fun and engaging manner. Distance from KAHE: 19 km.",
];

const CarouselComponent = memo(function CarouselComponent() {
  const [index, setIndex] = useState(1);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === 17 ? 1 : prevIndex + 1));
  }, []);

  const handleBack = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === 1 ? 17 : prevIndex - 1));
  }, []);

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
          loading="lazy" // Enables lazy loading
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2">
          {descriptions[index - 1]}
        </div>
      </div>
    </div>
  );
});

export default CarouselComponent;
