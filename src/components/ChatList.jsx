import React from "react";

import { useState } from "react";
import { chats } from "../data/dummyData";

const TABS = [
  { label: "All", value: "all" },
  { label: "Assigned to me", value: "assigned" },
  { label: "Unassigned", value: "unassigned" },
  { label: "Closed", value: "closed" },
];

export default function ChatList({ selectedChatId, onSelect }) {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");

  // Filter by tab
  let filteredChats = chats;
  if (tab === "assigned") {
    filteredChats = chats.filter(
      (c) => c.status === "assigned" && c.assignedTo === "Harshit"
    );
  } else if (tab === "unassigned") {
    filteredChats = chats.filter((c) => c.status === "unassigned");
  } else if (tab === "closed") {
    filteredChats = chats.filter((c) => c.status === "closed");
  }

  // Then search filter
  filteredChats = filteredChats.filter((chat) =>
    chat.participant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full md:w-72 border-r bg-white">
      <div className="p-4 border-b font-bold text-lg">Chats</div>

      {/* 🔘 Tabs */}
      <div className="px-4 flex gap-2 flex-wrap mb-2">
        {TABS.map((t) => (
          <button
            key={t.value}
            onClick={() => setTab(t.value)}
            className={`text-sm px-3 py-1 rounded-full ${
              tab === t.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 🔍 Search Input */}
      <div className="px-4 pb-2">
        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Chat List */}
      <ul className="divide-y overflow-y-auto max-h-screen">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => {
            const lastMessage = chat.messages[chat.messages.length - 1];
            return (
              <li
                key={chat.id}
                className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100 ${
                  selectedChatId === chat.id ? "bg-gray-200" : ""
                }`}
                onClick={() => onSelect(chat)}
              >
                <img
                  src={chat.participant.avatar}
                  alt={chat.participant.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{chat.participant.name}</span>
                  <span className="text-xs text-gray-500 truncate max-w-[180px]">
                    {lastMessage?.text}
                  </span>
                </div>
              </li>
            );
          })
        ) : (
          <li className="p-4 text-sm text-gray-500">No chats found.</li>
        )}
      </ul>
    </div>
  );
}
