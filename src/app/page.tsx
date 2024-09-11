"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Main Content Area */}
      <div className="w-[90%]">
        <div className="md:hmax flex flex-col">
          <div className="flex-1 py-5">
            {/* Logos and Conference Info */}
            <div className="w-full">
              <div className="flex justify-evenly">
                <Image
                  src="/images/logos/logo.avif"
                  alt="das"
                  width={100}
                  height={100}
                  className="shrink-0"
                />
                <Image
                  src="/images/kiic.png"
                  alt="das"
                  width={200}
                  height={100}
                />
                <Image
                  src="/images/iic.png"
                  alt="das"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            <h1 className="text-center  text-3xl text-primary font-bold pb-2 pt-5">
              ICERCS-2024
            </h1>
            <h1 className="text-center text-3xl font pt-5 leading-normal">
              2<sup>nd</sup> INTERNATIONAL CONFERENCE ON EMERGING RESEARCH{" "}
              <br /> IN COMPUTATIONAL SCIENCE - 2024
            </h1>
            <p className="text-center text-lg pt-5">Organised by</p>
            <h1 className="text-center text-2xl font-bold pt-5  text-secondary">
              Department of Computer Science and Engineering
            </h1>
            <h1 className="text-center text-2xl font-bold pt-1  text-secondary">
              Department of Artificial Intelligence and Data Science
            </h1>
            <h1 className="text-center text-2xl font-bold pt-1  text-secondary">
              Department of Computer Science and Engineering (Cyber Security)
            </h1>
          </div>
          <div className="pt-4 flex-col m-auto  items-center justify-center gap-2 text-secondary font-bold">
            <p>IEEE ICERCS Previous Publication</p> <br />
            <a
              href="https://ieeexplore.ieee.org/xpl/conhome/10433896/proceeding"
              className="text-primary flex justify-center underline"
            >
              2023
            </a>
          </div>
          {/* Location and Dates */}
          <div className="h-full bg-primary py-10">
            <div className="mx-auto container h-full gap-14 place-content-center md:grid grid-cols-3">
              <div className="text-3xl text-secondary h-full md:text-right font-black">
                12, 13, 14 <br /> DEC, 2024
              </div>
              <div className="col-span-2 text-xl text-white">
                <p>KARPAGAM ACADEMY OF HIGHER EDUCATION</p>
                <p>(Deemed to be University)</p>
                <p>(Established Under Section of 3 of UGC Act, 1956)</p>
                <p>(Accredited by NAAC with A+ Grade in the second cycle)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Section - Fixed on the Side */}
      <div className="w-[10%] bg-primary sticky top-0 h-[100%] overflow-y-auto custom-scrollbar">
        <h2 className="text-white text-center font-bold py-4">
          Technical Sponsors
        </h2>
        <div className="flex flex-col items-center space-y-4 p-2">
          <Image
            src="/images/sponsor/sponsor1.png"
            alt="Sponsor 1"
            width={80}
            height={80}
          />
          <Image
            src="/images/sponsor/sponsor2.png"
            alt="Sponsor 2"
            width={80}
            height={80}
          />
         
        </div>
        <h2 className="text-white text-center font-bold py-4">
          Innovation Sponsors
        </h2>
        <div className="flex flex-col items-center space-y-4 p-2">
          <Image
            src="/images/sponsor/sponsor1.png"
            alt="Sponsor 1"
            width={80}
            height={80}
          />
          <Image
            src="/images/sponsor/sponsor2.png"
            alt="Sponsor 2"
            width={80}
            height={80}
          />
        
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
