import React, { useState } from "react";
import { chats } from "./data/dummyData";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import MobileSidebar from "./components/MobileSidebar";
import { AnimatePresence } from "framer-motion";
import AdminHeader from "./components/AdminHeader";

export default function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Topbar with AdminHeader */}
      <AdminHeader onMenuClick={() => setIsMobileSidebarOpen(true)} />

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar - visible on md+ */}
        <div className="hidden md:block border-r border-gray-200">
          <ChatList
            chats={chats}
            onSelect={setSelectedChat}
            selected={selectedChat}
          />
        </div>

        {/* Chat Window */}
        <ChatWindow chat={selectedChat} />

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileSidebarOpen && (
            <MobileSidebar
              chats={chats}
              onSelect={(chat) => {
                setSelectedChat(chat);
                setIsMobileSidebarOpen(false);
              }}
              selected={selectedChat}
              onClose={() => setIsMobileSidebarOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
