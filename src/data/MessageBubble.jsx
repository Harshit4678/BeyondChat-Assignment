// MessageBubble.jsx

export default function MessageBubble({ message, isAdmin }) {
  return (
    <div className={`flex ${isAdmin ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
          isAdmin
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
