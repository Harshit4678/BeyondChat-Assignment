import React from "react";
import { FiMessageCircle, FiUsers, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-16 bg-gray-900 text-white flex flex-col items-center py-4 space-y-6">
      <FiMessageCircle size={24} className="cursor-pointer" />
      <FiUsers size={24} className="cursor-pointer" />
      <FiSettings size={24} className="cursor-pointer mt-auto" />
    </div>
  );
}
