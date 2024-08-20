import Image from 'next/image';
import AboutKahe from './about-kahe/page';
import AboutICERCS from './about-icercs/page';
import AboutCoimbatore from './about-coimbatore/page';
import KeynoteSpeakers from './keynote-speakers/page';
import GuideLines from './guidelines/page';
import CallForPaper from './call-for-paper/page';
import Registration from './registration/page';
import Contact from './contact/page';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='md:hmax flex flex-col pb-32'>
        <div className='flex-1 py-5'>
          <div className='flex justify-around'>
            <Image
              src='/images/logos/logo.avif'
              alt='das'
              width={120}
              height={120}
              className='shrink-0'
            />
            <Image src='/images/kiic.png' alt='das' width={250} height={120} />
            <Image src='/images/iic.png' alt='das' width={250} height={120} />
            <Image
              src='/images/icercs.jpg'
              alt='das'
              width={150}
              height={120}
            />
          </div>
          <div className='pt-4 flex items-center justify-center gap-2 text-secondary font-bold'>
            <p className=''>IEEE ICERCS 2023 Publication History: </p>
            <Link
              href={
                'https://ieeexplore.ieee.org/xpl/conhome/10433896/proceeding'
              }
              className='underline text-primary'
            >
              Click Here to View``
            </Link>
          </div>
          <h1 className='text-center text-3xl text-primary font-bold pb-2 pt-5'>
            ICERCS-2024
          </h1>
          <h1 className='text-center text-3xl font pt-5 leading-normal'>
            2<sup>nd</sup> INTERNATIONAL CONFERENCE ON EMERGING RESEARCH <br />{' '}
            IN COMPUTATIONAL SCIENCE - 2024
          </h1>
          <p className='text-center text-lg pt-5'>Organised by</p>
          <h1 className='text-center text-2xl font-bold pt-5  text-secondary'>
            Department of Computer Science and Engineering
          </h1>
          <h1 className='text-center text-2xl font-bold pt-1  text-secondary'>
            Department of Artificial Intelligence and Data Science
          </h1>
          <h1 className='text-center text-2xl font-bold pt-1  text-secondary'>
            Department of Computer Science and Engineering (Cyber Security)
          </h1>
        </div>
        <div className='h-full bg-primary py-10 '>
          <div className='mx-auto container h-full gap-14 place-content-center md:grid grid-cols-3'>
            <div className='text-3xl text-secondary h-full  md:text-right font-black '>
              12, 13, 14 <br /> DEC, 2024
            </div>
            <div className='col-span-2 text-xl text-white'>
              <p>KARPAGAM ACADEMY OF HIGHER EDUCATION</p>
              <p>(Deemed to be University)</p>
              <p>(Established Under Section of 3 of UGC Act, 1956)</p>
              <p>(Accredited by NAAC with A+ Grade in the second cycle)</p>
            </div>
          </div>
        </div>
      </div>
      <AboutKahe />
      <AboutICERCS />
      <div className='py-10'></div>
      <AboutCoimbatore />
      <KeynoteSpeakers />
      <CallForPaper />
      <Registration />
      <GuideLines />
      <Contact />
    </>
  );
}
