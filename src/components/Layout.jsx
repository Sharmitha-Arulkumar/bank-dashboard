import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const sidebarItems = [
  { name: "Dashboard", path: "/", icon: "🏠" },
  { name: "Transactions", path: "/transactions", icon: "🔄" },
  { name: "Accounts", path: "/accounts", icon: "👤" },
  { name: "Investments", path: "/investments", icon: "📊" },
  { name: "Credit Cards", path: "/credit-cards", icon: "💳" },
  { name: "Loans", path: "/loans", icon: "💵" },
  { name: "Services", path: "/services", icon: "🛠️" },
  { name: "My Privileges", path: "/privileges", icon: "💡" },
  { name: "Setting", path: "/settings", icon: "⚙️" },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentTitle =
    sidebarItems.find((item) => item.path === location.pathname)?.name ||
    "Overview";

  return (
    <div className="flex h-screen bg-[#F5F7FA] overflow-hidden text-[#343C6A]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-[#E6EFF5] flex-shrink-0">
        <div className="h-20 flex items-center px-8 gap-3">
          <div className="w-9 h-9 bg-[#1814F3] rounded-xl flex items-center justify-center text-white text-xl font-bold">
            🏦
          </div>
          <h1 className="text-xl font-extrabold text-[#343C6A] tracking-tight">
            BankDash.
          </h1>
        </div>
        <nav className="flex-grow py-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-5 px-8 py-3.5 font-semibold text-sm transition-all relative ${
                  isActive
                    ? "text-[#1814F3]"
                    : "text-[#B1B1B1] hover:text-[#343C6A]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#1814F3] rounded-r"
                  />
                )}
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar Context Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/40"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="lg:hidden fixed top-0 bottom-0 left-0 z-50 w-64 bg-white flex flex-col shadow-2xl"
            >
              <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1814F3] rounded-lg flex items-center justify-center text-white">
                    🏦
                  </div>
                  <h1 className="text-lg font-bold">BankDash.</h1>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-xl p-1"
                >
                  ✕
                </button>
              </div>
              <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-4 px-6 py-3 font-semibold text-sm ${location.pathname === item.path ? "text-[#1814F3] bg-blue-50/40 border-l-4 border-[#1814F3]" : "text-[#B1B1B1]"}`}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Frame Wrapper Layout Workspace */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white border-b border-[#E6EFF5] flex items-center justify-between px-6 lg:px-10 flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-2xl p-1"
            >
              ☰
            </button>
            <h2 className="text-xl lg:text-2xl font-bold text-[#343C6A]">
              {currentTitle}
            </h2>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="relative hidden md:block">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search for something"
                className="bg-[#F5F7FA] rounded-full pl-11 pr-5 py-2.5 text-xs w-64 border-none outline-none text-[#718EBF] focus:ring-1 focus:ring-blue-400"
              />
            </div>
            <button className="p-2.5 bg-[#F5F7FA] rounded-full text-[#718EBF] hover:bg-gray-100 hidden sm:block">
              ⚙️
            </button>
            <button className="p-2.5 bg-[#F5F7FA] rounded-full text-red-400 hover:bg-gray-100 hidden sm:block relative">
              🔔{" "}
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-2 right-2"></span>
            </button>
            <img
              src="https://unsplash.com"
              alt="User image"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
            />
          </div>
        </header>

        <main className="flex-grow overflow-y-auto p-6 lg:p-8 max-w-[1440px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
