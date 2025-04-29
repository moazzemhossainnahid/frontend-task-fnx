import React from "react";
import { MapPin, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { TbCoinTakaFilled } from "react-icons/tb";
import { GiNetworkBars } from "react-icons/gi";

// Type definitions
type EventCardProps = {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  spotsLeft: number;
  price: number;
  category: string;
  level: string;
  image: string;
  attending: string;
};

// Fake data for the three event cards
const eventData: EventCardProps[] = [
  {
    title: "Legends Rise on the Field",
    date: "Thu, Dec 5",
    startTime: "10:30AM",
    endTime: "12:30PM",
    location: "Ratchathani Sports Complex",
    spotsLeft: 7,
    price: 320,
    category: "Football",
    level: "Below 25y",
    image:
      "https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/7d25e7a9-39c5-497f-0a60-d2c48db38600/public",
    attending: "6/8",
  },
  {
    title: "Chasing Glory: Football Showdown",
    date: "Thu, Dec 5",
    startTime: "2:30PM",
    endTime: "4:30PM",
    location: "Ratchathani Sports Complex",
    spotsLeft: 2,
    price: 320,
    category: "Football",
    level: "Below 25y",
    image:
      "https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/ffe3d7b7-1667-4cc9-d323-e14e642e0500/public",
    attending: "6/8",
  },
  {
    title: "United We Play, United Win",
    date: "Thu, Dec 5",
    startTime: "5:30PM",
    endTime: "7:30PM",
    location: "Ratchathani Sports Complex",
    spotsLeft: 2,
    price: 320,
    category: "Football",
    level: "Below 25y",
    image:
      "https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/7d25e7a9-39c5-497f-0a60-d2c48db38600/public",
    attending: "6/8",
  },
];

// Single Event Card Component
const EventCard: React.FC<{ event: EventCardProps }> = ({ event }) => {
  return (
    <div className="w-full rounded-3xl pb-3 border-b overflow-hidden flex flex-col bg-white">
      <div className="relative">
        <Image
          src={event.image}
          alt={event.title}
          height={300}
          width={300}
          className="w-full h-28 object-cover"
          priority
        />
        <button className="absolute top-2 right-2 text-gray-800/60  p-1 rounded-full hover:bg-gray-800/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-3 flex-grow">
        <div className="flex justify-between items-center pb-2">
          <div className="flex space-x-2">
            <span className="bg-[#D9F2E6] text-xs font-medium py-1 px-2 rounded-xl">
              {event.category}
            </span>
            <span className="bg-[#EFEDFF] text-xs font-medium py-1 px-2 rounded-xl">
              {event.level}
            </span>
          </div>
          <span className="text-green-500 flex items-center gap-1 text-xs">
            <GiNetworkBars />
            Advanced
          </span>
        </div>
        <h3 className="text-[#34735F] mb-1">
          {event.title}
        </h3>

        <div className="flex items-center text-xs text-gray-700 mb-2">
          <Calendar size={14} className="mr-1" />
          <span>
            {event.date} • {event.startTime} - {event.endTime}
          </span>
        </div>
        <div className="flex items-start mb-2">
          <div className="flex items-center mt-0.5">
            <MapPin size={14} className="text-red-500" />
          </div>
          <span className="text-xs text-gray-600 ml-1">{event.location}</span>
        </div>
        <div className="flex items-center justify-end mt-1">
          <span className="text-xs font-medium text-orange-500">
            {event.spotsLeft} spots left
          </span>
        </div>
      </div>
      <div className="py-2 px-3 flex justify-between items-center">
        <span className="text-xs text-gray-600">
          {event.attending} attending
        </span>
        <span className="text-xs text-gray-600 flex items-center">
          <TbCoinTakaFilled className="text-2xl" />
          <span className="text-2xl font-thin">{event.price}</span>
          <span className="pt-2">/person</span>
        </span>
      </div>
    </div>
  );
};

// Event Cards Carousel Component
const EventCards: React.FC = () => {
  return (
    <div className="w-full mx-auto p-10 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Other events you may like
        </h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-100">
            <ChevronLeft size={16} />
          </button>
          <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-100">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="w-full flex space-x-4 overflow-x-auto pb-4">
        {eventData.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventCards;
