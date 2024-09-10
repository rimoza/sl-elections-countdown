"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-11-13T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-green-500 via-white to-red-500 text-black shadow-lg">
      <CardHeader className="bg-black bg-opacity-70 text-white rounded-t-xl">
        <CardTitle className="text-center text-2xl font-bold">Somaliland Election Countdown</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col bg-white bg-opacity-80 rounded-lg p-2 shadow-md">
              <span className="text-4xl font-bold text-green-700">{value}</span>
              <span className="text-sm capitalize text-red-700 font-semibold">{unit}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;