"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Progress } from '@/components/ui/progress';
import { Share2 } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-11-13T00:00:00');
    const startDate = new Date('2023-11-13T00:00:00'); // Assuming 1 year countdown

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

    return () => clearInterval(timer);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Somaliland Election 2024 Countdown',
      text: 'Join me in counting down to the Somaliland Election 2024!',
      url: window.location.href,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-green-500 via-white to-red-500 text-black shadow-lg">
      <CardHeader className="bg-black bg-opacity-70 text-white rounded-t-xl">
        <CardTitle className="text-center text-2xl font-bold">Somaliland Election Countdown</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-4 gap-4 text-center mb-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col bg-white bg-opacity-80 rounded-lg p-2 shadow-md">
              <span className="text-4xl font-bold text-green-700">{value}</span>
              <span className="text-sm capitalize text-red-700 font-semibold">{unit}</span>
            </div>
          ))}
        </div>
        <Progress value={progress} className="mb-4" />
        <div className="flex justify-between">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Election Info</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Somaliland Election 2024</AlertDialogTitle>
                <AlertDialogDescription>
                  The Somaliland presidential election is scheduled for November 13, 2024. This election is crucial for the democratic process in Somaliland. Make sure you`&apos;re registered to vote and stay informed about the candidates and issues.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Close</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button onClick={handleShare} variant="outline">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;