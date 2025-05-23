import React from "react";
export default function Topbar() {
  return (
    <div className="h-14 bg-white border-b px-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search"
        className="border rounded px-3 py-1 w-64"
      />
      <div className="flex items-center space-x-3">
        <span className="font-medium">Harshit</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full w-8 h-8"
        />
      </div>
    </div>
  );
}
