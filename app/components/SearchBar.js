"use client"; // if using app directory
import { useState } from "react";
import { useRouter } from "next/router";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    router.push(path);
    setQuery(""); // clear input after navigation
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search pages..."
        className="w-full p-2 border border-gray-300 rounded"
      />
      {query && (
        <ul className="border border-t-0 border-gray-300 rounded-b bg-white shadow">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li
                key={item.path}
                onClick={() => handleSelect(item.path)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results</li>
          )}
        </ul>
      )}
    </div>
  );
}
