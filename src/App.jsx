import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex flex-1 overflow-hidden">
          <ChatList />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}
