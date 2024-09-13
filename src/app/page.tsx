import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "@/components/countdown-timer";
import CandidateInfo from "@/components/candidate-info";
import VotingGuide from "@/components/voting-guide";
import ElectionQuiz from "@/components/election-quiz";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-green-500 via-white to-red-500 p-4">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/somaliland-flag.svg"
          alt="Somaliland Flag"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="z-10 text-center mb-8 mt-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Somaliland Election 2024
        </h1>
        <p className="text-xl text-black">
          Your voice matters. Be ready to vote!
        </p>
      </div>
      <CountdownTimer />
      <div className="mt-8 space-x-4 z-50">
        <CandidateInfo />
        <VotingGuide />
        <ElectionQuiz />
      </div>
      <footer className="z-10 w-full text-center text-black mt-8 mb-4">
        <p>© 2024 Ridwan Mohamed Abdi. All rights reserved.</p>
        <p>
          <Link
            href="https://rimoza.vercel.app"
            target="_blank"
            className="underline"
          >
            Website
          </Link>
          {" | "}
          <Link
            href="https://wa.me/252634367633"
            target="_blank"
            className="underline"
          >
            WhatsApp
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
