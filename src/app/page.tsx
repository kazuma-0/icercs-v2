"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* MAIN CONTENT */}
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex-1 py-3 px-3 sm:py-4 sm:px-4 md:py-5 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24 5xl:px-32">
            {/* Title Section */}
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-[10rem] text-yellow-500 font-bold pb-2 pt-3 sm:pt-4 md:pt-5 leading-tight">
              ICERCS-2025
            </h1>
            
            <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-medium pt-3 sm:pt-4 md:pt-5 leading-normal text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto">
              3<sup className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">rd</sup> INTERNATIONAL CONFERENCE ON EMERGING RESEARCH{" "}
              <br className="hidden sm:block" /> 
              <span className="sm:hidden"> </span>
              IN COMPUTATIONAL SCIENCE - 2025
            </h1>
            
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl pt-3 sm:pt-4 md:pt-5 text-white">
              Organised by
            </p>

            {/* Department names with responsive spacing */}
            <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-8xl mx-auto space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 2xl:space-y-6">
              <h1 className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold pt-3 sm:pt-4 md:pt-5 text-yellow-500 leading-tight">
                Department of Computer Science and Engineering
              </h1>
              <h1 className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold pt-1 text-yellow-500 leading-tight">
                Department of Artificial Intelligence and Data Science
              </h1>
              <h1 className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl font-bold pt-1 text-yellow-500 leading-tight">
                Department of Computer Science and Engineering (Cyber Security)
              </h1>
            </div>

            {/* Location and Dates - Fully responsive */}
            <div className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 3xl:py-24 4xl:py-28 5xl:py-32">
              <div className="mx-auto container max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 4xl:gap-28 place-content-center grid grid-cols-1 md:grid-cols-3">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl text-yellow-500 md:text-right font-black leading-tight text-center md:col-span-1">
                  11, 12, 13 <br /> DEC, 2025
                </div>
                <div className="md:col-span-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-white space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 text-center md:text-left">
                  <p>KARPAGAM ACADEMY OF HIGHER EDUCATION</p>
                  <p>(Deemed to be University)</p>
                  <p>(Established Under Section of 3 of UGC Act, 1956)</p>
                  <p>(Accredited by NAAC with A+ Grade in the second cycle)</p>
                </div>
              </div>
            </div>

            {/* Acknowledgement - Ultra responsive */}
            <div className="pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24 3xl:pt-28 4xl:pt-32">
              <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 3xl:p-20 4xl:p-24 5xl:p-28 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-8xl mx-auto border border-yellow-500/40">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-extrabold text-yellow-500 text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">
                  Acknowledgement
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-white leading-relaxed text-center max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
                  We gratefully acknowledge the support of{" "}
                  <span className="font-semibold text-yellow-400">
                    Microsoft
                  </span>{" "}
                  for providing the
                  <span className="font-semibold text-yellow-400">
                    {" "}
                    Conference Management Toolkit (CMT)
                  </span>{" "}
                  service to manage the peer-reviewing process of this
                  conference. This service was provided at no cost, including
                  Azure cloud services, software development, and technical
                  support, enabling a smooth and efficient review process for
                  ICERCS-2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT LOGOS - Ultra responsive positioning */}
      <div className="hidden lg:flex flex-col absolute right-2 sm:right-3 md:right-4 lg:right-5 xl:right-8 2xl:right-12 3xl:right-16 4xl:right-20 5xl:right-24 top-1/4 lg:top-1/3 xl:top-1/4 2xl:top-1/3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12 z-50">
        <Image
          src="/images/iic.png"
          className="rounded-lg sm:rounded-xl lg:rounded-2xl bg-white bg-opacity-70 shadow-lg"
          alt="IIC"
          width={300}
          height={150}
          style={{
            width: 'clamp(80px, 8vw, 400px)',
            height: 'auto',
            maxWidth: '100%'
          }}
        />
        <Image
          src="/images/kiic.png"
          className="rounded-lg sm:rounded-xl lg:rounded-2xl bg-white bg-opacity-70 shadow-lg"
          alt="KIIC"
          width={300}
          height={150}
          style={{
            width: 'clamp(80px, 8vw, 400px)',
            height: 'auto',
            maxWidth: '100%'
          }}
        />
      </div>
    </div>
  );
}