import Link from "next/link";

export default function Registration() {
  return (
    <div className="container pt-5 grid md:grid-cols-3 gap-10 h-max">
      <div className="col-span-2">
        <h3 className="text-2xl pb-5 font-black text-gold">
          Registration Fees
        </h3>
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="bg-transparent">
              <th className="border px-4 py-2 text-center text-gold">
                Categories
              </th>
              <th className="border px-4 py-2 text-center text-gold">
                IEEE Members
              </th>
              <th className="border px-4 py-2 text-center text-gold">
                IEEE Non-Members
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="border px-4 py-2 text-center">Indian Authors</td>
              <td className="border px-4 py-2 text-center">8250 INR</td>
              <td className="border px-4 py-2 text-center">8750 INR</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center">Foreign Authors</td>
              <td className="border px-4 py-2 text-center">160 USD</td>
              <td className="border px-4 py-2 text-center">175 USD</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-2xl pt-10 font-black text-gold">
          Publication details
        </h3>
        <p className="pt-2 text-white">
          Accepted papers will be submitted for inclusion in IEEE Xplore subject
          to meeting IEEE Xplore&apos;s scope and quality requirements.
        </p>
        <p className="pt-2 text-white">
          Extended version of the selected papers will be recommended for SCIE
          journals
        </p>
        <h3 className="text-2xl pt-10 font-black text-gold">Submission Link</h3>
        <p className="pt-2 text-white">
          The Microsoft CMT service was used for managing the peer-reviewing
          process for this conference. This service was provided for free by
          Microsoft and they bore all expenses, including costs for Azure cloud
          services as well as for software development and support.
        </p>
      </div>
      <div className="p-2 text-white">
        <div className="h-full w-full bg-transparent rounded p-5">
          <h3 className="text-2xl font-black text-gold text-center">
            Important Date&apos;s
          </h3>

          <div className="space-y-3">
            <DateWithLabel date="22/11/2025" label="Full Paper Submission" />
            <DateWithLabel date="25/11/2025" label="Paper Acceptance" />
            <DateWithLabel
              date="01/12/2025"
              label="Camera Ready Paper Submission"
            />
            <DateWithLabel
              date="02/12/2025"
              label="Last Date for Registration Payment"
            />

            <div className="text-white text-center">
              <p className="pt-2 text-lg font-bold">Conference Date</p>
              <h4 className="text-xl">11, 12 and 13th Dec, 2025</h4>
            </div>
          </div>

          <h3 className="text-2xl font-black pt-5 text-gold text-center">
            Online Payment Details
          </h3>
          <p className="text-center text-white">
            Use this link for payment <br />
            {/* <Link href={"https://admissions.kifees.com/events/kahe/icercs"}>
              https://admissions.kifees.com/events/kahe/icercs
            </Link> */}
          </p>
          {/* <div className="pt-3 flex items-center justify-center">
            <img
              src="/images/paymentqr.png"
              alt="qr"
              height={200}
              width={200}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

function DateWithLabel({ date, label }: { date: string; label: string }) {
  return (
    <div className="text-white text-center">
      <p className="pt-2 text-lg font-bold">{label}</p>
      <h4 className="">{date}</h4>
    </div>
  );
}
