"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [openUniversity, setOpenUniversity] = useState(false);
  const [openCollege, setOpenCollege] = useState(false);

  return (
    <aside className="w-64 bg-[#ad4682] text-white h-screen p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">MyApp</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block py-2 px-3 rounded hover:bg-[#7d0b4e]">
          Dashboard
        </Link>

        {/* University Notices Dropdown */}
        <div>
          <button
            onClick={() => setOpenUniversity(!openUniversity)}
            className="w-full flex items-center justify-between py-2 px-3 rounded hover:bg-[#7d0b4e]"
          >
            <span>University Notices</span>
            {openUniversity ? (
              <ChevronDown size={18} className="transition-transform duration-200" />
            ) : (
              <ChevronRight size={18} className="transition-transform duration-200" />
            )}
          </button>
          {openUniversity && (
            <div className="ml-4 mt-1 space-y-1">
              <Link href="/dashboard/university-notices" className="block py-1 px-2 rounded hover:bg-[#7d0b4e]">
                Add University Notices
              </Link>
              <Link href="/dashboard/manageuniversity" className="block py-1 px-2 rounded hover:bg-[#7d0b4e]">
                Manage University Notices
              </Link>
            </div>
          )}
        </div>

        {/* Notices for Colleges Dropdown */}
        <div>
          <button
            onClick={() => setOpenCollege(!openCollege)}
            className="w-full flex items-center justify-between py-2 px-3 rounded hover:bg-[#7d0b4e]"
          >
            <span>Notices for Colleges</span>
            {openCollege ? (
              <ChevronDown size={18} className="transition-transform duration-200" />
            ) : (
              <ChevronRight size={18} className="transition-transform duration-200" />
            )}
          </button>
          {openCollege && (
            <div className="ml-4 mt-1 space-y-1">
              <Link href="/dashboard/college-notices" className="block py-1 px-2 rounded hover:bg-[#7d0b4e]">
                Add College Notices
              </Link>
              <Link href="/dashboard/managecollege" className="block py-1 px-2 rounded hover:bg-[#7d0b4e]">
                Manage College Notices
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
