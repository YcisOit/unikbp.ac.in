"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const RegionsList = () => {
  const [regions2, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get("/api/regions1"); // Correct API route
        setRegions(response.data);
      } catch (err) {
        console.error("Error fetching regions:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRegions();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center text-blue-700 mb-4">Regions List</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && regions2.length > 0 ? (
        <ul className="list-disc pl-5">
          {regions2.map((region) => (
            <li key={region.id} className="p-2 border-b text-black">
              {region.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No regions found.</p>
      )}
    </div>
  );
};

export default RegionsList;
