import { useState, useEffect } from "react";
import SplashScreen from "../components/SplashScreen";
import AccessKey from "../components/AccessKey";
import Navbar from "../components/Navbar";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Splash screen shows for 2.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    // Check if device is remembered
    const remembered = localStorage.getItem("rememberedKey");
    if (remembered === "777111") {
      setIsAuthenticated(true);
    }

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (key, rememberDevice) => {
    if (key === "777111") {
      setIsAuthenticated(true);
      if (rememberDevice) {
        localStorage.setItem("rememberedKey", key);
      }
    } else {
      alert("Invalid access key. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("rememberedKey");
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!isAuthenticated) {
    return <AccessKey onLogin={handleLogin} />;
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p>Welcome to your AI 360° Dashboard!</p>
        {/* Your actual dashboard components go here */}
      </main>
    </div>
  );
}
