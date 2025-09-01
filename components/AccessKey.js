// components/AccessKey.js
import { useState, useEffect } from "react";

export default function AccessKey({ onSuccess }) {
  const [key, setKey] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem("accessKey");
    if (savedKey) {
      setKey(savedKey);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key === "777111") {
      if (remember) {
        localStorage.setItem("accessKey", key);
      }
      onSuccess();
    } else {
      alert("Invalid access key. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter Access Key</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Access Key"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="mr-2"
            />
            <span>Remember device</span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
