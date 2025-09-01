// components/Dashboard.js
import Navbar from "./Navbar";

export default function Dashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar onLogout={onLogout} />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          AI 360°
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-600">Your AI insights will appear here.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Usage</h2>
            <p className="text-gray-600">Track your activity here.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Models</h2>
            <p className="text-gray-600">Explore available AI models.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p className="text-gray-600">Customize your preferences.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
