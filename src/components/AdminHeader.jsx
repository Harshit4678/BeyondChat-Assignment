import React from "react";

export default function AdminHeader({ onMenuClick }) {
  return (
    <div className="h-14 w-full bg-blue-600 text-white flex items-center justify-between px-4 md:px-6 shadow-sm">
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden text-2xl font-bold"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Title */}
      <div className="hidden md:block text-lg font-semibold">BeyondChats</div>

      {/* Admin identity on right */}
      <div className="flex items-center space-x-3">
        <span className="text-sm font-medium">Admin</span>
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="Admin"
          className="w-9 h-9 rounded-full border cursor-pointer hover:scale-105 transition"
        />
      </div>
    </div>
  );
}
