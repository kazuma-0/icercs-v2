"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      {/* MAIN CONTENT */}
      <div className="w-full">
        <div className="md:hmax flex flex-col">
          <div className="flex-1 py-5">
            {/* Title Section */}
            <h1 className="text-center text-3xl text-yellow-500 font-bold pb-2 pt-5">
              ICERCS-2025
            </h1>
            <h1 className="text-center text-3xl font pt-5 leading-normal text-white">
              3<sup>rd</sup> INTERNATIONAL CONFERENCE ON EMERGING RESEARCH{" "}
              <br /> IN COMPUTATIONAL SCIENCE - 2025
            </h1>
            <p className="text-center text-lg pt-5 text-white">Organised by</p>
            <h1 className="text-center text-2xl font-bold pt-5 text-yellow-500">
              Department of Computer Science and Engineering
            </h1>
            <h1 className="text-center text-2xl font-bold pt-1 text-yellow-500">
              Department of Artificial Intelligence and Data Science
            </h1>
            <h1 className="text-center text-2xl font-bold pt-1 text-yellow-500">
              Department of Computer Science and Engineering (Cyber Security)
            </h1>

            {/* Location and Dates */}
            <div className="h-full py-10">
              <div className="mx-auto container h-full gap-14 place-content-center md:grid grid-cols-3">
                <div className="text-3xl text-yellow-500 h-full md:text-right font-black">
                  11, 12, 13 <br /> DEC, 2025
                </div>
                <div className="col-span-2 text-xl text-white">
                  <p>KARPAGAM ACADEMY OF HIGHER EDUCATION</p>
                  <p>(Deemed to be University)</p>
                  <p>(Established Under Section of 3 of UGC Act, 1956)</p>
                  <p>(Accredited by NAAC with A+ Grade in the second cycle)</p>
                </div>
              </div>
            </div>

            {/* Acknowledgement */}
            <div className="pt-12">
              <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 rounded-xl shadow-lg p-6 max-w-4xl mx-auto border border-yellow-500/40">
                <h3 className="text-3xl font-extrabold text-yellow-500 text-center mb-4">
                  Acknowledgement
                </h3>
                <p className="text-lg text-white leading-relaxed text-center">
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

      {/* RIGHT LOGOS (scrolls with page) */}
      <div className="hidden md:flex flex-col right-5 mt-44 gap-4 z-50 absolute">
        <Image
          src="/images/iic.png"
          className="rounded-xl bg-white bg-opacity-70 shadow-lg"
          alt="IIC"
          width={200}
          height={100}
        />
        <Image
          src="/images/kiic.png"
          className="rounded-xl bg-white bg-opacity-70 shadow-lg"
          alt="KIIC"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}
