
export type Player = {
  id: string;
  name: string;
  initials: string;
  isHost?: boolean;
};

export type Comment = {
    id: string;
    authorId: string;
    text: string;
    authorName: string;
    authorInitials: string;
    timeAgo: string;
    isReply?: boolean;
    replyToId?: string;
    replies?: Comment[];
  };

export type EventDetails = {
  title: string;
  location: string;
  date: string;
  time: string;
  spotsFilled: string;
  price: string;
  description: string;
  fieldName: string;
  fieldAddress: string;
  highlights: {
    date: string;
    startTime: string;
    endTime: string;
    arriveTime: string;
    venueStatus: string;
  };
  refundPolicy: string[];
  host: {
    name: string;
    activitiesHosted: number;
    rating: number;
  };
};

export const eventDetails: EventDetails = {
  title: "Road to the Football Finals",
  location: "Bashundhara Sports Complex",
  date: "Mar 14",
  time: "7:30 PM - 9:30 PM",
  spotsFilled: "5/11",
  price: "320tk /player",
  description:
    "Learn about the capital's first beavers in 400 years from the Ealing Beaver project, make your own mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get into the nuts and bolts of tomorrow's high-rise buildings.",
  fieldName: "NDE Field",
  fieldAddress:
    "Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois",
  highlights: {
    date: "Mon, 2 Dec",
    startTime: "7:30 AM",
    endTime: "8:30 AM",
    arriveTime: "15 min before start",
    venueStatus: "Venue booked",
  },
  refundPolicy: [
    "Full refund if host cancels the game",
    "Full refund if you cancel 24+ hours in advance",
    "Full refund if game is cancelled due to low attendance",
  ],
  host: {
    name: "Alex Mercer",
    activitiesHosted: 23,
    rating: 4.5,
  },
};

export const players: Player[] = [
  { id: "am", name: "Alex Mercer", initials: "AM", isHost: true },
  { id: "ju", name: "Jamir Uddin", initials: "JU" },
  { id: "ba", name: "Biplu Ahmed", initials: "BA" },
  { id: "tb", name: "Topu Barman", initials: "TB" },
  { id: "rh", name: "Rakib Hossain", initials: "RH" },
];

export const comments: Comment[] = [
    {
      id: "c1",
      authorId: "am",
      authorName: "Alex Mercer",
      authorInitials: "AM",
      text: "Looking forward to the game! What's the final player count?",
      timeAgo: "14 min",
      replies: [
        {
          id: "r1",
          authorId: "rk",
          authorName: "Rifat Khan",
          authorInitials: "RK",
          text: "missing few players",
          timeAgo: "14 min",
          isReply: true,
          replyToId: "c1"
        },
        {
          id: "r2",
          authorId: "rk",
          authorName: "Rifat Khan",
          authorInitials: "RK",
          text: "missing few players",
          timeAgo: "14 min",
          isReply: true,
          replyToId: "c1"
        }
      ]
    },
    {
      id: "c2",
      authorId: "am",
      authorName: "Alex Mercer",
      authorInitials: "AM",
      text: "Looking forward to the game! What's the final player count?",
      timeAgo: "14 min",
      replies: [

      ]
    },
    {
      id: "c3",
      authorId: "am",
      authorName: "Alex Mercer",
      authorInitials: "AM",
      text: "Looking forward to the game! What's the final player count?",
      timeAgo: "14 min",
      replies: [
        {
          id: "r3",
          authorId: "rk",
          authorName: "Rifat Khan",
          authorInitials: "RK",
          text: "got any friends?",
          timeAgo: "14 min",
          isReply: true,
          replyToId: "c3"
        }
      ]
    }
  ];
  