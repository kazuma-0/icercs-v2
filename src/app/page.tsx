import Image from 'next/image';
import AboutKahe from './about-kahe/page';
import AboutICERCS from './about-icercs/page';
import AboutCoimbatore from './about-coimbatore/page';
import KeynoteSpeakers from './keynote-speakers/page';
import GuideLines from './guidelines/page';
import CallForPaper from './call-for-paper/page';
import Registration from './registration/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <>
      <div className='md:hmax flex flex-col'>
        <div className='flex-1 py-5'>
          <div className='flex justify-center'>
            <Image
              src='/images/logos/logo.avif'
              alt='das'
              width={120}
              height={120}
            />
          </div>
          <h1 className='text-center text-4xl text-primary font-bold pb-2 pt-5'>
            ICERCS-2024
          </h1>
          <h1 className='text-center text-3xl font pt-5 leading-normal'>
            2<sup>nd</sup> INTERNATIONAL CONFERENCE ON EMERGING RESEARCH <br />{' '}
            IN COMPUTATIONAL SCIENCE - 2024
          </h1>
          <p className='text-center text-xl pt-5'>Organised by</p>
          <h1 className='text-center text-3xl font-bold pt-1 capitalize text-secondary'>
            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          </h1>
        </div>
        <div className='h-full bg-primary py-10 md:py-0'>
          <div className='mx-auto container h-full gap-14 place-content-center md:grid grid-cols-3'>
            <div className='text-5xl text-secondary h-full  md:text-right font-black '>
              12, 13, 14 <br /> DEC, 2024
            </div>
            <div className='col-span-2 text-2xl text-white'>
              <p>Department of Computer Science and Engineering</p>
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
      <GuideLines />
      <CallForPaper />
      <Registration />
      <Contact />
    </>
  );
}
