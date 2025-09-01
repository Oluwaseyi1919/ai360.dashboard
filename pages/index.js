import { useState, useEffect } from "react";

export default function Home() {
  const ACCESS_KEY = "777111"; // hardcoded key
  const [inputKey, setInputKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Check local storage for remembered device
    const remembered = localStorage.getItem("rememberDevice");
    if (remembered === "true") {
      setInputKey(ACCESS_KEY);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputKey === ACCESS_KEY) {
      setIsAuthenticated(true);
      setFadeIn(true);
      if (rememberDevice) {
        localStorage.setItem("rememberDevice", "true");
      } else {
        localStorage.removeItem("rememberDevice");
      }
    } else {
      alert("Invalid Access Key. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFadeIn(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Access Key</h1>
          <input
            type="password"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            className="w-full border rounded-lg p-2 mb-4"
            placeholder="Enter Access Key"
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
              className="mr-2"
            />
            <label>Remember this device</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gray-50 p-6 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Top-right Logout */}
      <div className="flex justify-end">
        <div className="relative inline-block text-left">
          <button
            onClick={handleLogout}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Welcome Splash */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold mb-6">Welcome to AI 360°</h1>
        <p className="text-gray-600 mb-8">
          This is your dashboard. All the AI tools are ready for you.
        </p>

        {/* Dashboard grid placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="bg-white shadow-md rounded-2xl p-6">Tool 1</div>
          <div className="bg-white shadow-md rounded-2xl p-6">Tool 2</div>
          <div className="bg-white shadow-md rounded-2xl p-6">Tool 3</div>
        </div>
      </div>
    </div>
  );
}
