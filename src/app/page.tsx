"use client";
import Image from "next/image";

export default function Home() {
  const speakers = [
    {
      name: "PROF. DR. FADI AL-TURJMAN",
      title: "Dean-AI and Informatics",
      university: "Near East University, Turkey",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=5G0uavwAAAAJ&citpid=2", // replace with actual image path
    },
    {
      name: "DR. DESHINTA ARROVA DEWI",
      title: "Associate Professor",
      university:
        "Faculty of Data Sciences and Information Technology, INTI International University, Malaysia",
      image:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=16XPxHUAAAAJ&citpid=22", // replace with actual image path
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE - Keynote Speakers */}
      <div className="hidden lg:flex flex-col fixed left-4 lg:left-6 xl:left-8 2xl:left-10 top-20 lg:top-24 xl:top-28 z-50 max-w-[280px] lg:max-w-[320px] xl:max-w-[350px] bottom-4">
        <div className="flex flex-col items-center p-4 w-full h-full overflow-hidden relative">
          <h2 className="text-lg lg:text-xl font-black text-yellow-300 mb-6 text-center uppercase">
            Keynote Speakers
          </h2>
          <div className="w-full flex-1 overflow-hidden relative">
            <div className="flex flex-col gap-8 animate-vertical-marquee">
              {speakers.map((speaker, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-bold uppercase text-white text-center">
                    {speaker.name}
                  </h3>
                  <p className="text-xs mt-1 text-gray-300 text-center">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-gray-300 text-center leading-tight">
                    {speaker.university}
                  </p>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {speakers.map((speaker, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex flex-col items-center"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-bold uppercase text-white text-center">
                    {speaker.name}
                  </h3>
                  <p className="text-xs mt-1 text-gray-300 text-center">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-gray-300 text-center leading-tight">
                    {speaker.university}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Floating Particles Effect - Smaller */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="animate-float-slow absolute top-4 left-2 w-1 h-1 bg-green-400 rounded-full opacity-40"></div>
            <div className="animate-float-medium absolute top-12 left-4 w-1.5 h-1.5 bg-green-300 rounded-full opacity-30"></div>
            <div className="animate-float-fast absolute top-20 left-1 w-1 h-1 bg-green-500 rounded-full opacity-35"></div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT - Center */}
      <div className="w-full lg:pl-[320px] lg:pr-[380px] h-screen overflow-hidden">
        <div className="flex flex-col h-full justify-center">
          {/* Title Section */}
          <div className="flex-1 py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10 3xl:px-12 4xl:px-14 5xl:px-16">
            <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-yellow-500 font-bold pb-1 pt-1 sm:pt-2 md:pt-2 leading-tight">
              ICERCS-2025
            </h1>
            <h1 className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium pt-1 sm:pt-2 md:pt-2 leading-normal text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
              3
              <sup className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                rd
              </sup>{" "}
              INTERNATIONAL CONFERENCE ON EMERGING RESEARCH{" "}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              IN COMPUTATIONAL SCIENCE - 2025
            </h1>
            <div className="flex items-center justify-center py-1">
              <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-base 3xl:text-base text-yellow-400 font-bold leading-tight">
                11<sup className="text-[6px]">th</sup>, 12
                <sup className="text-[6px]">th</sup>, 13
                <sup className="text-[6px]">th</sup> December 2025
              </span>
            </div>

            {/* Image Slider */}
            <div className="mt-2 w-full mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-2xl">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 2xl:h-96">
                <div className="absolute inset-0 animate-image-fade-1">
                  <Image
                    src="/images/karpagam_university.jpeg"
                    alt="University Campus"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 animate-image-fade-2">
                  <Image
                    src="/images/tourism/1.jpg"
                    alt="Tourism 1"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 animate-image-fade-3">
                  <Image
                    src="/images/tourism/2.jpg"
                    alt="Tourism 2"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 animate-image-fade-4">
                  <Image
                    src="/images/tourism/3.jpg"
                    alt="Tourism 3"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            {/* Marquee Final Paper Submission */}
            {/* Marquee - One Line */}
            <div className="overflow-hidden w-full bg-yellow-200 border-y border-yellow-400 mt-2">
              <div className="whitespace-nowrap animate-marquee text-sm font-semibold text-green-900 py-1 px-3">
                Final Paper Submission — Deadline: 3<sup>rd</sup> November 2025
              </div>
            </div>

            <p className="text-center text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-base 3xl:text-lg pt-1 sm:pt-1 md:pt-1 text-white">
              Organised by
            </p>
            <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto space-y-0.5">
              <h2 className="text-center text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-base 3xl:text-lg 4xl:text-xl font-bold text-yellow-500 leading-tight">
              Department of Computer Science and Engineering
              </h2>
              <h2 className="text-center text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-base 3xl:text-lg 4xl:text-xl font-bold text-yellow-500 leading-tight">
              Department of Artificial Intelligence and Data Science
              </h2>
              <h2 className="text-center text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-base 3xl:text-lg 4xl:text-xl font-bold text-yellow-500 leading-tight">
              Department of Computer Science and Engineering (Cyber Security)
              </h2>
            </div>

            {/* Karpagam Academy Information */}
            <div className="flex flex-col items-center justify-center py-1">
              <div className="flex flex-col items-center text-[10px] sm:text-[10px] md:text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-tight tracking-tight">
                <span className="text-white font-semibold text-center">
                  KARPAGAM ACADEMY OF HIGHER EDUCATION
                </span>
                <span className="text-gray-300 text-center">
                  (Deemed to be University)
                </span>
                <span className="text-gray-300 text-center">
                  (Established Under Section 3 of UGC Act, 1956)
                </span>
                <span className="text-gray-300 text-center">
                  (Accredited by NAAC with A+ Grade in the second cycle)
                </span>
                <span className="text-gray-300 text-center">
                  Pollachi Main Road, Eachanari, Coimbatore - 641021
                </span>
              </div>
            </div>

            <div className="fixed -left-full -bottom-full w-0 h-0 overflow-hidden invisible">
              <div className="bg-yellow-900/10 rounded px-3 py-1 border border-yellow-500/30 shadow text-[10px] sm:text-xs font-thin text-yellow-300 text-center">
                Acknowledgement: We gratefully acknowledge the support of{" "}
                <span className="font-semibold text-yellow-400">Microsoft</span>{" "}
                for providing the{" "}
                <span className="font-semibold text-yellow-400">
                  Conference Management Toolkit (CMT)
                </span>{" "}
                service to manage the peer-reviewing process of this conference.
                This service was provided at no cost, including Azure cloud
                services, software development, and technical support, enabling
                a smooth and efficient review process for ICERCS-2025.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LOGOS - Single box with vertical marquee */}
        <div className="hidden lg:flex flex-col fixed right-4 lg:right-6 xl:right-8 2xl:right-10 top-20 lg:top-24 xl:top-28 z-50 max-w-[280px] lg:max-w-[320px] xl:max-w-[350px] bottom-4">
          <div className="flex flex-col items-center p-4 w-full h-full overflow-hidden relative">
            <h3 className="text-base lg:text-lg xl:text-xl font-bold text-yellow-500 mb-4 text-center">
              Co-Host & Co-Sponsors
            </h3>
            <div className="w-full flex-1 overflow-hidden relative">
              <div className="flex flex-col gap-8 animate-vertical-marquee">
                {/* Co-hosts Section */}
                <div className="flex flex-col items-center gap-4">
                  <h4 className="text-sm lg:text-base font-bold text-yellow-400 text-center">
                    Co-Host
                  </h4>
                  <Image
                    src="/images/iic.png"
                    className="rounded bg-white bg-opacity-95 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-107"
                    alt="IIC"
                    width={180}
                    height={120}
                    style={{
                      width: "180px",
                      height: "120px",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />

                  <Image
                    src="/images/kiic.png"
                    className="rounded bg-white bg-opacity-95 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-107"
                    alt="KIIC"
                    width={180}
                    height={120}
                    style={{
                      width: "180px",
                      height: "120px",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                {/* Event Cosponsors Section */}
                <div className="flex flex-col items-center gap-4">
                  <h4 className="text-sm lg:text-base font-bold text-yellow-400 text-center">
                    Co-Sponsors
                  </h4>
                  <Image
                    src="https://logos-world.net/wp-content/uploads/2023/05/UiTM-Logo.png"
                    alt="UiTM"
                    width={180}
                    height={120}
                    className="bg-white rounded shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-107"
                    style={{
                      width: "180px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />

                  <Image
                    src="https://newinti.edu.my/wp-content/uploads/2020/01/INTI-YourFutureBuiltToday-LOGO_2020.png"
                    alt="INTI"
                    width={180}
                    height={120}
                    className="bg-white rounded shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-107"
                    style={{
                      width: "180px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex flex-col items-center gap-4">
                  <h4 className="text-sm lg:text-base font-bold text-yellow-400 text-center">
                    Co-Host
                  </h4>
                  <Image
                    src="/images/iic.png"
                    className="rounded bg-white bg-opacity-95 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-107"
                    alt="IIC"
                    width={180}
                    height={120}
                    style={{
                      width: "180px",
                      height: "120px",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />

                  <Image
                    src="/images/kiic.png"
                    className="rounded bg-white bg-opacity-95 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-107"
                    alt="KIIC"
                    width={180}
                    height={120}
                    style={{
                      width: "180px",
                      height: "120px",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h4 className="text-sm lg:text-base font-bold text-yellow-400 text-center">
                    Co-Sponsors
                  </h4>
                  <Image
                    src="https://logos-world.net/wp-content/uploads/2023/05/UiTM-Logo.png"
                    alt="UiTM"
                    width={180}
                    height={120}
                    className="bg-white rounded shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-107"
                    style={{
                      width: "180px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />

                  <Image
                    src="https://newinti.edu.my/wp-content/uploads/2020/01/INTI-YourFutureBuiltToday-LOGO_2020.png"
                    alt="INTI"
                    width={180}
                    height={120}
                    className="bg-white rounded shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-107"
                    style={{
                      width: "180px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Floating Particles Effect - Smaller */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="animate-float-slow absolute top-4 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-40"></div>
              <div className="animate-float-medium absolute top-12 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-30"></div>
              <div className="animate-float-fast absolute top-20 right-1 w-1 h-1 bg-yellow-500 rounded-full opacity-35"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Close main container div */}
      <style jsx global>{`
        @keyframes vertical-marquee {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 10s linear infinite;
        }
        @keyframes image-fade-1 {
          0%,
          25% {
            opacity: 1;
          }
          25.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-2 {
          0%,
          25% {
            opacity: 0;
          }
          25.01%,
          50% {
            opacity: 1;
          }
          50.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-3 {
          0%,
          50% {
            opacity: 0;
          }
          50.01%,
          75% {
            opacity: 1;
          }
          75.01%,
          100% {
            opacity: 0;
          }
        }
        @keyframes image-fade-4 {
          0%,
          75% {
            opacity: 0;
          }
          75.01%,
          100% {
            opacity: 1;
          }
        }
        .animate-image-fade-1 {
          animation: image-fade-1 4s linear infinite;
        }
        .animate-image-fade-2 {
          animation: image-fade-2 4s linear infinite;
        }
        .animate-image-fade-3 {
          animation: image-fade-3 4s linear infinite;
        }
        .animate-image-fade-4 {
          animation: image-fade-4 4s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
