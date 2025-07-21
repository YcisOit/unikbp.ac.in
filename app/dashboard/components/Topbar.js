// app/dashboard/components/Topbar.js
export default function Topbar() {
    return (
      <header className="bg-[#9c1965] text-white px-6 py-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div>
            <span className="mr-4">Welcome, Admin</span>
            <button className="bg-white text-[#9c1965] px-3 py-1 rounded hover:bg-gray-100">Logout</button>
          </div>
        </div>
      </header>
    );
  }
  