// components/Navbar.js
import { useState } from "react";

export default function Navbar({ onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-4 right-6">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition"
        >
          ☰
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
            <button
              onClick={onLogout}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
