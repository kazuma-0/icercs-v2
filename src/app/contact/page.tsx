/* eslint-disable @next/next/no-img-element */
export default function Contact() {
  return (
    <div className='container grid grid-cols-3 h-max gap-10 py-5'>
      <div className=' bg-primary text-white p-5 rounded'>
        <h3 className='text-3xl font-black text- text-center pb-5'>
          Organizing Committee
        </h3>
        <div className='space-y-2'>
          <OrganizingCommittee
            one='Patron'
            two='Dr.S.Ravi'
            three='Registrar'
          ></OrganizingCommittee>
          <OrganizingCommittee
            one='Chief Patron'
            two='Prof. Dr.B.Venkatachalapathy'
            three='Vice-Chancellor'
          ></OrganizingCommittee>
          <OrganizingCommittee
            one='Conference Chair'
            two='Prof. Dr.V.Parthasarathy'
            three='Dean (R&D) and Industry Relations'
          ></OrganizingCommittee>
          <OrganizingCommittee
            one='Convenor'
            two='Dr.A.Amutha'
            three='Dean - FOE'
          ></OrganizingCommittee>
          <OrganizingCommittee
            one=''
            two='Dr. R. Santhosh'
            three='Professor and HoD'
          ></OrganizingCommittee>
          <div className='text-center'>
            <h4 className='text-xl font-bold text-secondary'>Co - Convenors</h4>
            <p className='text-lg'>Dr. R. Santhosh</p>
            <p className='text-lg'>Dr.B. Arun Kumar </p>
            <p className='text-lg'>Dr.R. Roopa</p>
          </div>
          <div className='text-center'>
            <h4 className='text-xl font-bold text-secondary'>
              Technical Program Chair
            </h4>
            <p className='text-lg'>Dr. J. Alfred Daniel</p>
            <p className='text-lg'>Dr. B. Lanitha</p>
            <p className='text-lg'>Dr. K. Vanitha</p>
          </div>
          <div className='text-center'>
            <h4 className='text-xl font-bold text-secondary'>
              Publication Chair
            </h4>
            <p className='text-lg'>Dr. T. Mohanraj </p>
            <p className='text-lg'>Dr. R. Dhanapal </p>
            <p className='text-lg'>Dr. S. P. Sasirekha</p>
            <p className='text-lg'>Dr. Laxmi Raja</p>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.604629083579!2d76.9876831!3d10.917622399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85af2d5b63f75%3A0x958123c48e7c849d!2sKarpagam%20Academy%20of%20Higher%20Education!5e0!3m2!1sen!2sin!4v1661835489062!5m2!1sen!2sin'
          className='w-full h-60'
          loading='lazy'
        ></iframe>
        <h3 className='text-3xl font-black text-primary pt-4 pb-5'>Distance</h3>
        <div className='text-xl space-y-2 font-bold'>
          <p>From Airport - 21.9Kms (45 Min) Via NH 544</p>
          <p>From Railway Station- 15.3Kms (41 Min) Via NH 948</p>
        </div>
        <div className='flex items-center justify-center'>
          <img
            src='https://images.prismic.io/icercs-kahe/430e2fbb-98d0-4382-abc5-b0a03502804d_8209413-removebg-preview.png?auto=compress,format'
            alt=''
            className='size-32 my-2 '
          />
        </div>
        <div className='text-center text-lg font-black'>
          <p>Dr. R. Santhosh,</p>
          <p>Professor and HoD (Technical Program Chair)</p>
          <p>Department of Computer Science and Engineering</p>
          <p>Karpagam Academy of Higher Education</p>
          <p>(Deemed to be University)</p>
          <p>Pollachi Main Road, Eachanari Post,</p>
          <p>Coimbatore, India</p>
          <p>E-mail: icercs@kahedu.edu.in</p>
          <p>Help Lines: (+91)9786660004, (+91) 8220261899</p>
          <p>
            Website: <a href='https://www.icercs.com'>https://www.icercs.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

function OrganizingCommittee({
  one,
  two,
  three,
}: {
  one: string;
  two: string;
  three: string;
}) {
  return (
    <div className='text-center'>
      <h4 className='text-xl font-bold text-secondary'>{one}</h4>
      <p className='text-lg'>{two}</p>
      <p className='text-sm'>{three}</p>
    </div>
  );
}
