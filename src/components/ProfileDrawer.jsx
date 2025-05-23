import React from "react";
import { motion as Motion } from "framer-motion";

export default function ProfileDrawer({ participant, onClose }) {
  return (
    <Motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 border-l"
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-semibold text-lg">User Info</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
      </div>

      <div className="p-6 flex flex-col items-center space-y-4">
        <img
          src={participant.avatar}
          alt={participant.name}
          className="w-24 h-24 rounded-full border"
        />
        <div className="text-lg font-medium">{participant.name}</div>
        <div className="text-sm text-gray-500">Email: {participant.email}</div>
        <div className="text-sm text-gray-500">Role: {participant.role}</div>
        <div className="text-sm text-gray-500">
          Joined: {participant.joinedAt}
        </div>
        <div className="text-sm text-gray-500">
          Status: {participant.status}
        </div>
      </div>
    </Motion.div>
  );
}
