export default function KeynoteSpeakers() {
  return (
    <div className='container'>
      <h2 className='text-3xl uppercase font-black text-primary pt-5'>
        Keynote Speakers
      </h2>
      <div className='grid md:grid-cols-3 pt-10 gap-10'>
        <div className='items-center justify-center flex h-full w-full flex-col'>
          <img src='/images/keynote/1.png' alt='' />
          <h4 className='text-primary font-bold text-xl pt-2'>
            DR. K. PORKUMARAN
          </h4>
          <div className='text-center text-secondary'>
            <p>Chairman, IEEE Madras</p>
            {/* <p> Section & Principal,</p> */}
            {/* <p>Sri Sairam Engineering College</p> */}
          </div>
        </div>
        <div className='items-center justify-center flex h-full w-full flex-col'>
          <img src='/images/keynote/2.png' className='w-[160px]' alt='' />
          <h4 className='text-primary font-bold text-xl pt-2'>AWAIS AHMAD</h4>
          <div className='text-center text-secondary'>
            <p>Professor, </p>
            <p>Imam Mohammad Ibn Saud Islamic University,</p>
            <p>Saudi Arabia</p>
          </div>
        </div>
        <div className='items-center justify-center flex h-full w-full flex-col'>
          <img src='/images/keynote/wh.png' alt='' />
          <h4 className='text-primary font-bold text-xl pt-2'>
            Dr. E. Kannan Eswariah
          </h4>
          <div className='text-center text-secondary'>
            <p>Registrar & Dean,</p>
            <p>Vel Tech Dr. R & D Institute of Science & Technology,</p>
            <p>Chennai</p>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 pt-10 gap-10'>
        <div className='items-center justify-center flex h-full w-full flex-col'>
          <img src='/images/keynote/3.png' className='w-[160px]' alt='' />
          <h4 className='text-primary font-bold text-xl pt-2'>
            GOUTHAM REDDY ALAVALAPATI
          </h4>
          <div className='text-center  text-secondary'>
            <p>Professor,</p>
            <p> University of Illinois</p>
            <p>USA</p>
          </div>
        </div>

        <div className='items-center justify-center flex h-full w-full flex-col'>
          <img src='/images/keynote/6.png' alt='' />
          <h4 className='text-primary font-bold text-xl pt-2'>
            TS DR. MOHD TALMIZIE AMRON
          </h4>
          <div className='text-center  text-secondary'>
            <p>Professor,</p>
            <p> Universiti Teknologi MARA,</p>
            <p>Malaysia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
