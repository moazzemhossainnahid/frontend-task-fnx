"use client";

import { eventDetails } from "@/lib/data/data";
import { useState } from "react";
import InfoTab from "../Tabs/InfoTab";
import PlayerTab from "../Tabs/PlayerTab";
import CommentsTab from "../Tabs/CommentsTab";
import PaymentModal from "./PaymentModal";

export default function FootballFinals() {
  const [activeTab, setActiveTab] = useState<"info" | "player" | "comments">(
    "info"
  );

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleOpenPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handlePaymentContinue = () => {
    // Handle payment processing logic here
    setIsPaymentModalOpen(false);
    // You might want to redirect or show a confirmation message
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="w-full flex justify-between gap-10 pb-2">
        <div className="w-4/6 flex justify-between items-start">
          <div className="">
            <h1 className="text-4xl font-extrabold mb-2">
              {eventDetails.title}
            </h1>
            <p className="text-gray-600 text-xl">{eventDetails.location}</p>
            <p className="text-gray-600 text-xl mt-1">
              {eventDetails.date} from {eventDetails.time}
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button className="p-2 rounded-full border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white w-80 rounded-xl p-5">
          <div className="flex justify-between items-center border rounded-lg p-4 my-4">
            <div className="text-sm">
              <span className="text-red-500">
                {eventDetails.spotsFilled.split("/")[0]} spots left
              </span>
            </div>
            <div className="text-lg font-bold">
              <span>
                {eventDetails.price}{" "}
                <span className="font-thin text-sm">(both)</span>
              </span>
            </div>
          </div>

          <button
            className="w-full bg-emerald-400 text-black py-3 px-4 rounded-3xl font-bold"
            onClick={handleOpenPaymentModal}
          >
            Join event
          </button>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="border-b border-gray-200 md:w-4/6">
        <div className="flex">
          <button
            className={`py-3 px-6 text-center ${
              activeTab === "info"
                ? "border-b-2 border-red-400 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Info
          </button>
          <button
            className={`py-3 px-6 text-center ${
              activeTab === "player"
                ? "border-b-2 border-red-400 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("player")}
          >
            Player
          </button>
          <button
            className={`py-3 px-6 text-center ${
              activeTab === "comments"
                ? "border-b-2 border-red-400 text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("comments")}
          >
            Comments
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="md:w-4/6 pt-10">
        {activeTab === "info" && <InfoTab />}

        {activeTab === "player" && <PlayerTab />}

        {activeTab === "comments" && <CommentsTab />}
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
        onContinue={handlePaymentContinue}
      />
    </div>
  );
}
