import React from "react";
export default function ChatWindow() {
  return (
    <div className="flex-1 bg-white flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-gray-500 text-center mt-20">
          Select a chat to view Messages
        </p>
      </div>
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
    </div>
  );
}
