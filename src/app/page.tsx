"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[100%]">
        <div className="md:hmax flex flex-col">
          <div className="flex-1 py-5">
            <div className="w-[105%]">
              <div className="flex justify-evenly">
                <Image
                  src="/whitelogo.png"
                  alt="das"
                  width={100}
                  height={100}
                  className="shrink-0"
                />
                <Image
                  src="/images/kiic.png"
                  className=" rounded-xl bg-white bg-opacity-70"
                  alt="das"
                  width={200}
                  height={100}
                />
                <Image
                  src="/images/iic.png"
                  className=" rounded-xl bg-white bg-opacity-70"
                  alt="das"
                  width={200}
                  height={100}
                />
              </div>

              {/* <div className="flex justify-evenly mt-4">
                <Image
                  src="/ieee.png"
                  alt="das"
                  className=" rounded-xl bg-white bg-opacity-70"
                  width={200}
                  height={100}
                />
                <Image
                  src="/ieeeprocom.png"
                  alt="das"
                  className=" rounded-xl bg-white bg-opacity-70"
                  width={230}
                  height={100}
                />
              </div> */}
            </div>

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
          </div>

          {/* <div className="flex justify-center mt-10">
            <table className="table-auto border-collapse rounded-lg overflow-hidden shadow-lg text-sm">
              <thead>
                <tr className="bg-yellow-500 text-white">
                  <th className="px-2 py-1">Type</th>
                  <th className="px-2 py-1">Code</th>
                  <th className="px-2 py-1">ISBN</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-black">
                  <td className="border px-2 py-1">XPLORE COMPLIANT</td>
                  <td className="border px-2 py-1">CFP24D03-ART</td>
                  <td className="border px-2 py-1">979-8-3315-3496-7</td>
                </tr>
                <tr className="bg-gray-100 text-black">
                  <td className="border px-2 py-1">CD-ROM</td>
                  <td className="border px-2 py-1">CFP24D03-CDR</td>
                  <td className="border px-2 py-1">979-8-3315-3494-3</td>
                </tr>
              </tbody>
            </table>
          </div> */}

          <div className="pt-4 flex-col m-auto items-center justify-center gap-2 text-yellow-500 font-bold">
            <p>IEEE ICERCS Previous Publication</p> <br />
            <div className="flex justify-evenly">
              <a
                href="https://ieeexplore.ieee.org/xpl/conhome/10433896/proceeding"
                className="text-white flex justify-center underline"
              >
                2023
              </a>
              <a
                href="https://ieeexplore.ieee.org/xpl/conhome/10433896/proceeding"
                className="text-white flex justify-center underline"
              >
                2024
              </a>
            </div>
          </div>
          {/* Location and Dates */}
          <div className="h-full  py-10">
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
        </div>
      </div>
    </div>
  );
}
