export const chats = [
  {
    id: 1,
    participant: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    assignedTo: "Harshit",
    status: "assigned",
    messages: [
      {
        sender: "user",
        text: "Hello, I need help with my order.",
        timestamp: "2025-05-23T10:00:00Z",
      },
      {
        sender: "admin",
        text: "Sure! Can you please provide your order ID?",
        timestamp: "2025-05-23T10:01:00Z",
      },
    ],
  },
  {
    id: 2,
    participant: {
      name: "Riya Sharma",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    assignedTo: "Harshit",
    status: "assigned",
    messages: [
      {
        sender: "user",
        text: "The product I received is damaged.",
        timestamp: "2025-05-23T09:30:00Z",
      },
      {
        sender: "admin",
        text: "I'm really sorry to hear that. We'll replace it immediately.",
        timestamp: "2025-05-23T09:32:00Z",
      },
    ],
  },
  {
    id: 3,
    participant: {
      name: "Doe Enterprises",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    assignedTo: null,
    status: "unassigned",
    messages: [
      {
        sender: "user",
        text: "Hi, we are interested in your enterprise plan.",
        timestamp: "2025-05-22T15:45:00Z",
      },
    ],
  },
  {
    id: 4,
    participant: {
      name: "Anjali Gupta",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    assignedTo: null,
    status: "closed",
    messages: [
      {
        sender: "user",
        text: "Thanks for the help! All resolved now.",
        timestamp: "2025-05-21T18:20:00Z",
      },
      {
        sender: "admin",
        text: "Glad to help. Closing this ticket.",
        timestamp: "2025-05-21T18:22:00Z",
      },
    ],
  },
];
