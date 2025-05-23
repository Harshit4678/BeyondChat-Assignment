import React, { useState } from "react";
import { format, isSameDay } from "date-fns";
import ProfileDrawer from "./ProfileDrawer";

export default function ChatWindow({ chat }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  if (!chat) {
    return (
      <div className="flex-1 bg-white flex items-center justify-center text-gray-400">
        Select a conversation to start chatting
      </div>
    );
  }

  const { participant } = chat;

  let lastMessageDate = null;

  return (
    <div className="relative flex-1 bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b font-semibold text-lg flex items-center space-x-3">
        <img
          src={participant.avatar}
          alt={participant.name}
          className="w-10 h-10 rounded-full cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        />
        <span>{participant.name}</span>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {chat.messages.map((msg, index) => {
          const currentDate = new Date(msg.timestamp);
          const showDate =
            !lastMessageDate || !isSameDay(currentDate, lastMessageDate);
          lastMessageDate = currentDate;

          return (
            <div key={index}>
              {showDate && (
                <div className="text-center text-xs text-gray-500 my-2">
                  {format(currentDate, "MMMM d, yyyy")}
                </div>
              )}
              <div
                className={`flex ${
                  msg.sender === "admin" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg text-sm shadow ${
                    msg.sender === "admin"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-[10px] text-right mt-1 opacity-70">
                    {format(currentDate, "p")}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input field */}
      <div className="p-4 border-t flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 border rounded px-3 py-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <ProfileDrawer
          participant={participant}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
  );
}
