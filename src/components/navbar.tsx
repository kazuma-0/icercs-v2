import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='h-20 bg-primary'>
      <div className='mx-auto max-w-[92%] h-full flex justify-between items-center'>
        <h2 className='text-4xl font-bold tracking-wide text-white'>ICERCS</h2>
        <div className='flex gap-6 text-white tracking-wide hover:*:text-secondary transition-colors'>
          <Link href={'/'}>Home</Link>
          <Link href={'/about-kahe'}>About KAHE</Link>
          <Link href={'/about-icercs'}>About ICERCS&apos;24</Link>
          <Link href={'/about-coimbatore'}>About Coimbatore</Link>
          <Link href={'/committee'}>Committee</Link>
          <Link href={'keynote-speakers'}>Keynote</Link>
          <Link href={'guidelines'}>Submission Guidelines</Link>
          <Link href={'/reviewers'}>Reviewers</Link>
          <Link href={'/call-for-paper'}>Call for Paper</Link>
          <Link href={'/registration'}>Registration</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
