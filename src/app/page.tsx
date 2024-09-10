import type { NextPage } from 'next';
import CountdownTimer from '@/components/countdown-timer';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 via-white to-red-500 p-4">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/somaliland-flag.svg"
          alt="Somaliland Flag"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="z-10 text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">Somaliland Election 2024</h1>
        <p className="text-xl text-black">Your voice matters. Be ready to vote!</p>
      </div>
      <CountdownTimer />
    </div>
  );
};

export default Home;