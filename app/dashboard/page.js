// app/dashboard/page.js
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-bold text-[#930e5c]">Welcome to Dashboard</h1>
        </main>
      </div>
    </div>
  );
}
