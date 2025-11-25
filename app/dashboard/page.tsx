"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardHome() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/dashboard/counts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        setData(res.data.data);
      } catch (err) {
        console.error("Dashboard Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [token]);

  if (loading) {
    return <h1 className="text-xl font-semibold">Loading Dashboard...</h1>;
  }

  // -------------------------
  // Cards configuration arrays
  // -------------------------

  const projectCards = [
    {
      title: "PLANNED Projects",
      value: data?.projects?.PLANNED ?? 0,
      color: "bg-red-400",
    },
    {
      title: "ACTIVE Projects",
      value: data?.projects?.ACTIVE ?? 0,
      color: "bg-green-400",
    },
    {
      title: "COMPLETED Projects",
      value: data?.projects?.COMPLETED ?? 0,
      color: "bg-blue-400",
    },
  ];

  const taskCards = [
    {
      title: "TODO Tasks",
      value: data?.tasks?.TODO ?? 0,
      color: "bg-pink-400",
    },
    {
      title: "IN PROGRESS Tasks",
      value: data?.tasks?.IN_PROGRESS ?? 0,
      color: "bg-yellow-400",
    },
    {
      title: "DONE Tasks",
      value: data?.tasks?.DONE ?? 0,
      color: "bg-purple-400",
    },
  ];

  // Combine into one grid
  const allCards = [...projectCards, ...taskCards];

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">

        {allCards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded shadow ${card.color}`}
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-3xl font-bold mt-3">{card.value}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
