"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleGoToLogin = () => {
    router.push("/login");
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("userData");
      localStorage.removeItem("token");

      setUser(null);
      setOpen(false);

      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-6 relative">
      <h1 className="text-xl font-semibold">TeamFlow</h1>

      {user ? (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 focus:outline-none"
          >
            <span className="text-gray-600">{user.name}</span>
            <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg p-2 z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleGoToLogin}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      )}
    </header>
  );
}
