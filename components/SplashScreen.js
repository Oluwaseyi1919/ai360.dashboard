// components/SplashScreen.js
import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Splash screen shows for 2s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide animate-fadeIn">
        Welcome to AI 360°
      </h1>
    </div>
  );
}
