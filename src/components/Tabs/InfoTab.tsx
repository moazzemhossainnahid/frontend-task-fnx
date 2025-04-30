import { eventDetails } from "@/lib/data/data";
import Image from "next/image";
import React from "react";
import { GiNetworkBars } from "react-icons/gi";

const InfoTab = () => {
  return (
    <div>
      {/* Tags */}
      <div className="flex justify-between gap-2 mb-8">
        <div className="flex justify-start items-center gap-3">
          <span
            className={`px-4 py-1 rounded-full bg-[#E6F8F8] text-[#4A4A4A]`}
          >
            Football
          </span>
          <span
            className={`px-4 py-1 rounded-full bg-[#E6F8F8] text-[#4A4A4A]`}
          >
            Relay
          </span>
          <span
            className={`px-4 py-1 rounded-full bg-[#FFE8F0] text-[#4A4A4A]`}
          >
            Female
          </span>
          <span
            className={`px-4 py-1 rounded-full bg-[#EFEDFF] text-[#4A4A4A]`}
          >
            Age: Below 25
          </span>
        </div>

        <span className="text-[#4A4A4A] flex items-center gap-1">
          <GiNetworkBars />
          Beginner
        </span>
      </div>

      {/* About this event */}
      <div className="mb-8 border-t pt-7">
        <h2 className="text-xl font-bold mb-3">About this event</h2>
        <p className="text-gray-700 text-sm mb-2">{eventDetails.description}</p>
        <button className="text-blue-500 underline underline-offset-2 text-sm">
          Read more
        </button>
      </div>

      {/* Location */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3">Location</h2>
        <div className="flex justify-between">
          <div className="w-fit">
            <p className="font-medium">{eventDetails.fieldName}</p>
            <p className="text-gray-600 text-sm mb-4">
              {eventDetails.fieldAddress}
            </p>
          </div>
          <button className="w-fit h-fit flex me-auto ml-32 border border-gray-300 rounded-full px-4 py-1 text-sm">
            Open maps
          </button>
        </div>
      </div>

      {/* Good to know */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-6">Good to know</h2>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Highlights */}
          <div className="bg-red-400 bg-opacity-80 text-white p-5 rounded-lg">
            <h3 className="font-bold mb-3">Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {eventDetails.highlights.date}
              </li>
              <li className="flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {eventDetails.highlights.startTime} -{" "}
                {eventDetails.highlights.endTime}
              </li>
              <li className="flex items-center gap-2">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Arrive {eventDetails.highlights.arriveTime}
              </li>
              <li className="flex items-center gap-2">
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
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                {eventDetails.highlights.venueStatus}
              </li>
            </ul>
          </div>

          {/* Refund policy */}
          <div className="bg-emerald-600 bg-opacity-80 text-white p-5 rounded-lg">
            <h3 className="font-bold mb-3">Refund & cancellation policy</h3>
            <ul className="space-y-2">
              {eventDetails.refundPolicy.map((policy, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-xl font-bold mt-0.5">•</span>
                  <span>{policy}</span>
                </li>
              ))}
            </ul>
            <div className="text-right mt-2">
              <button className="text-sm">Learn more</button>
            </div>
          </div>
        </div>
      </div>

      {/* Hosted by */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-6">Hosted by</h2>
        <div className="bg-gray-600 p-5 rounded-lg text-white">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-400 overflow-hidden">
                <Image
                  src="https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/56249d61-821c-406f-bf2f-700ba3db7600/public"
                  alt="Host"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{eventDetails.host.name}</h3>
                <p className="text-sm text-gray-300">
                  {eventDetails.host.activitiesHosted} activities hosted
                </p>
                <p className="text-sm text-gray-300">
                  {eventDetails.host.rating} host rating
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <button className="bg-[#FDE8CD] border h-fit border-white border-opacity-20 text-black text-sm rounded-full px-4 py-1">
                Message
              </button>
              <button className="bg-transparent border h-fit border-[#FDE8CD] text-[#FDE8CD] text-sm rounded-full px-4 py-1">
                View profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
