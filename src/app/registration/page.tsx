import Link from 'next/link';

export default function Registration() {
  return (
    <div className='container pt-5 grid grid-cols-3 gap-10 h-max '>
      <div className='col-span-2'>
        <h3 className='text-3xl pb-5 font-black text-primary'>
          Registration Fees
        </h3>
        <table className=' table-auto border-collapse w-full'>
          <thead className=''>
            <tr className='*:border-black'>
              <th className='border px-4 py-2'>Categories</th>
              <th className='border px-4 py-2'>IEEE Members</th>
              <th className='border px-4 py-2'>IEEE Non-Members</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            <tr className='*:border-black'>
              <td className='border  px-4 py-2'>PH.D / PG Scholars</td>
              <td className='border px-4 py-2'>5500 INR</td>
              <td className='border px-4 py-2'>6000 INR</td>
            </tr>
            <tr className='*:border-black'>
              <td className='border px-4 py-2'>Academician</td>
              <td className='border px-4 py-2'>6000 INR</td>
              <td className='border px-4 py-2'>7000 INR</td>
            </tr>
            <tr className='*:border-black'>
              <td className='border px-4 py-2'>Industrial Delegates</td>
              <td className='border px-4 py-2'>6000 INR</td>
              <td className='border px-4 py-2'>7000 INR</td>
            </tr>
            <tr className='*:border-black'>
              <td className='border px-4 py-2'>Overseas Delegates</td>
              <td className='border px-4 py-2'>150 USD</td>
              <td className='border px-4 py-2'>175 USD</td>
            </tr>
          </tbody>
        </table>

        <h3 className='text-3xl pt-10 font-black text-primary'>
          Publication details
        </h3>
        <p className='pt-2 text-lg'>
          Accepted papers will be submitted for inclusion in IEEE Xplore subject
          to meeting IEEE Xplore&apos;s scope and quality requirements.
        </p>
        <h3 className='text-3xl pt-10 font-black text-primary'>
          Submission Link
        </h3>
        <Link
          href={'https://cmt3.research.microsoft.com/ICERCS2024'}
          className='pt-3 text-blue-600 underline'
        >
          https://cmt3.research.microsoft.com/ICERCS2024
        </Link>
      </div>
      <div className='p-2 text-white'>
        <div className='h-full w-full bg-primary rounded p-5'>
          <h3 className='text-3xl font-black text-secondary text-center'>
            Important Date&apos;s
          </h3>

          <div className='space-y-5'>
            <DateWithLabel date='2024-10-31' label='Full Paper Submission' />
            <DateWithLabel date='2024-11-28' label='Paper Acceptance' />
            <DateWithLabel
              date='2024-11-29'
              label='Camera Ready Paper Submission'
            />
            <DateWithLabel
              date='2024-12-01'
              label='Last Date for Registration Payment'
            />
            <DateWithLabel date='2024-12-12' label='Conference Date' />
          </div>

          <h3 className='text-3xl font-black pt-5 text-secondary text-center'>
            Online Payment Details
          </h3>
          <p className='text-center'>
            Use this link for payment <br />
            <Link href={'https://admissions.kifees.com/events/kahe/icercs'}>
              https://admissions.kifees.com/events/kahe/icercs
            </Link>
          </p>
          <div className='pt-3 flex items-center justify-center'>
            <img
              src='https://icercs.com/qrcode.png'
              alt='qr'
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateWithLabel({ date, label }: { date: string; label: string }) {
  return (
    <div className='text-white text-center'>
      <p className='pt-2 text-xl font-bold'>{label}</p>
      <h4 className='text-xl'>{date}</h4>
    </div>
  );
}
