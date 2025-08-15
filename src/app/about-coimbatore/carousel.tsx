/* eslint-disable @next/next/no-img-element */
"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useCallback, memo } from "react";

// Define descriptions and distances outside the component to avoid re-creating them on every render
const placeInfo = [
  { 
    description: "Isha Yoga Center, Coimbatore: A serene place for yoga and meditation, known for its unique design and tranquil environment.",
    distance: "30 km"
  },
  { 
    description: "Tranquil Yoga & Meditation Retreats, Coimbatore: Offers a peaceful retreat experience with various yoga and meditation programs amidst nature.",
    distance: "25 km"
  },
  { 
    description: "Dhyana Lingam, Coimbatore: A spiritual center dedicated to meditation and self-realization, featuring a grand temple and beautiful surroundings.",
    distance: "32 km"
  },
  { 
    description: "Aaliyar Dam, Coimbatore: A picturesque dam surrounded by lush greenery, perfect for picnics and enjoying nature.",
    distance: "45 km"
  },
  { 
    description: "Ooty forms part of the Nilgiri Biosphere Reserve, the largest protected forest area in India.",
    distance: "80 km"
  },
  { 
    description: "BlackThunder, Coimbatore: A popular water theme park offering thrilling rides, wave pools, and family-friendly attractions.",
    distance: "50 km"
  },
  { 
    description: "Thiruvalluvar Statue, Coimbatore: A unique statue featuring 1330 Tamil characters, 12 vowels, 18 consonants, 216 vowels consonants and 1 ayutha eluthu, honouring the Tamil poet and philosopher Thiruvalluvar. The entire structure weighs 2.50 tonnes and is 15 feet wide, 25 feet high and 20 feet long.",
    distance: "7 km"
  },
  { 
    description: "Siruvaani Waterfalls, Coimbatore: A beautiful waterfall nestled in the hills, known for its refreshing waters and scenic hiking trails.",
    distance: "35 km"
  },
  { 
    description: "Kovai Kutralam, Coimbatore: A picturesque waterfall and a popular destination for nature lovers, surrounded by lush greenery.",
    distance: "30 km"
  },
  { 
    description: "CODISSIA E Hall, Coimbatore: A prominent exhibition center hosting various trade fairs, exhibitions, and events.",
    distance: "22 km"
  },
  { 
    description: "CODISSIA Trade Fair Complex, Coimbatore: A large venue for trade fairs and exhibitions, showcasing products and services from various industries.",
    distance: "22 km"
  },
  { 
    description: "Media Tree (Fountain Light Tower), Coimbatore: An iconic landmark featuring a fountain and light tower, known for its vibrant nighttime displays.",
    distance: "18 km"
  },
  { 
    description: "RaceCourse, Coimbatore: Race Course Walking Trail is a 2.4-mile distance and 5,500 steps walking trail.",
    distance: "17 km"
  },
  { 
    description: "Ukkadam-Valankulam Lake, Coimbatore: A scenic lake offering a tranquil escape with opportunities for boating and relaxing by the water.",
    distance: "16 km"
  },
  { 
    description: "Vaalparai, Coimbatore: A beautiful hill station known for its tea estates, scenic landscapes, and pleasant climate.",
    distance: "70 km"
  },
  { 
    description: "The Marudhamalai Murugan Temple, is a popular 12th-century hill temple situated in Coimbatore, Tamil Nadu, India.",
    distance: "40 km"
  },
  { 
    description: "Experimenta Science Centre - STEM Lab offers an interactive learning experience in the field of STEM (Science, Technology, Engineering and Mathematics). It is the first of its kind in South India, providing hands-on opportunities for students of all ages from schools and colleges in a fun and engaging manner.",
    distance: "19 km"
  },
];

const CarouselComponent = memo(function CarouselComponent() {
  const [index, setIndex] = useState(1);
  const totalPlaces = placeInfo.length;

  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === totalPlaces ? 1 : prevIndex + 1));
  }, []);

  const handleBack = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === 1 ? totalPlaces : prevIndex - 1));
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
        <div className="absolute top-0 left-0 right-0 bg-black/70 text-white p-3">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex-1 pr-4">
              <p className="text-sm sm:text-base">{placeInfo[index - 1].description}</p>
            </div>
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
              {placeInfo[index - 1].distance} from venue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CarouselComponent;
