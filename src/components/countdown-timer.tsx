"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Facebook, Twitter, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ElectionInfoModal = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="z-10">
        Election Info
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Somaliland Presidential Election 2024</DialogTitle>
        <DialogDescription>
          Key information about the upcoming election
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <h3 className="font-bold col-span-4">Date: November 13, 2024</h3>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <p className="col-span-4">
            The Somaliland presidential election is a crucial democratic event
            where citizens elect their next president. Here are some key points:
          </p>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Voter registration is required to participate.</li>
          <li>The election uses a first-past-the-post voting system.</li>
          <li>
            Candidates must be Somaliland citizens, Muslim, and at least 40
            years old.
          </li>
          <li>
            International observers are typically invited to monitor the
            election process.
          </li>
          <li>Results are usually announced within a week of the election.</li>
        </ul>
        <p>
          Stay informed and make sure your voice is heard in this important
          democratic process!
        </p>
      </div>
    </DialogContent>
  </Dialog>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [progress, setProgress] = useState(0);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const targetDate = new Date("2024-11-13T00:00:00");
    const startDate = new Date("2023-11-13T00:00:00"); // Assuming 1 year countdown

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const totalDuration = targetDate.getTime() - startDate.getTime();
      const elapsed = now.getTime() - startDate.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
        setProgress((elapsed / totalDuration) * 100);
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
      }
    }, 1000);

    // Set the share URL once the component mounts
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }

    return () => clearInterval(timer);
  }, []);

  const shareText =
    "Join me in counting down to the Somaliland Presidential Election 2024!";

  const handleShare = (platform: string) => {
    if (typeof window === "undefined") return;

    let url;
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(
          shareText + " " + shareUrl
        )}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-green-500 via-white to-red-500 text-black shadow-lg relative">
      <CardHeader className="bg-black bg-opacity-30 text-white rounded-t-xl">
        <CardTitle className="text-center text-2xl font-bold">
          Somaliland Election Countdown
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-4 gap-4 text-center mb-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="flex flex-col bg-white bg-opacity-80 rounded-lg p-2 shadow-md"
            >
              <span className="text-4xl font-bold text-green-700">{value}</span>
              <span className="text-sm capitalize text-red-700 font-semibold">
                {unit}
              </span>
            </div>
          ))}
        </div>
        <Progress value={progress} className="mb-4" />
        <div className="flex justify-between items-center relative z-10">
          <ElectionInfoModal />
          <div className="flex space-x-2">
            <Button
              onClick={() => handleShare("facebook")}
              variant="outline"
              size="icon"
              className="z-10"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => handleShare("twitter")}
              variant="outline"
              size="icon"
              className="z-10"
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => handleShare("whatsapp")}
              variant="outline"
              size="icon"
              className="z-10"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;
