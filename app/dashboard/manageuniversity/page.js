"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Link from "next/link";

export default function ManageUniversity() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("/api/getUniversitynotices");
        const data = await res.json();
        setNotices(data);
      } catch (error) {
        console.error("Failed to fetch notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-6 bg-gray-100">
          <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#930e5c] mb-6">
              University Notices
            </h2>
            {loading ? (
              <p>Loading...</p>
            ) : notices.length === 0 ? (
              <p>No notices found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2 border">Sr.No</th>
                      <th className="px-4 py-2 border">Title</th>
                      <th className="px-4 py-2 border">Date</th>
                      <th className="px-4 py-2 border">File</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices.map((notice, index) => (
                      <tr key={notice._id} className="text-center">
                        <td className="px-4 py-2 border">{index + 1}</td>
                        <td className="px-4 py-2 border">{notice.title}</td>
                        <td className="px-4 py-2 border">{notice.date}</td>
                        <td className="px-4 py-2 border">
                          <a
                            href={notice.filePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            View File
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
  
}
