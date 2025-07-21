"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function UniversityNoticesForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const router = useRouter(); // 👈 get router instance

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("file", file);

    try {
      const res = await fetch("/api/university-notices", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Notice submitted successfully!");
        setTitle("");
        setDate("");
        setFile(null);

        // 👇 Redirect to managenews page after 1 second
        setTimeout(() => {
          router.push("/dashboard/manageuniversity");

        }, 1000);
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-6 bg-gray-100">
          <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-[#930e5c] mb-6">
              University Notice Form
            </h2>
            {message && (
              <p className="mb-4 text-sm text-green-600">{message}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter notice title"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Upload File</label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                  className="w-full border border-gray-300 p-2"
                />
              </div>

              <button
                type="submit"
                className="bg-[#930e5c] text-white px-4 py-2 rounded hover:bg-[#7d0b4e]"
              >
                Submit News
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
