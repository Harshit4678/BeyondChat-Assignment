import React from "react";
import { chats } from "../data/dummyData";

export default function ChatList() {
  return (
    <div className="w-72 border-r bg-gray-50 overflow-y-auto">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="p-4 border-b hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="font-semibold">{chat.name}</div>
              <div className="text-sm text-gray-500 truncate">
                {chat.message}
              </div>
            </div>
            <div className="text-xs text-gray-400">{chat.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
