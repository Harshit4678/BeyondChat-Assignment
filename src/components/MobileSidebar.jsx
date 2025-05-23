import React from "react";
import { motion as Motion } from "framer-motion";
import ChatList from "./ChatList";

export default function MobileSidebar({ chats, onSelect, selected, onClose }) {
  return (
    <Motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex"
    >
      <div className="w-72 bg-white shadow-lg h-full">
        <ChatList chats={chats} onSelect={onSelect} selected={selected} />
      </div>
      <div className="flex-1 bg-black bg-opacity-40" onClick={onClose} />
    </Motion.div>
  );
}
