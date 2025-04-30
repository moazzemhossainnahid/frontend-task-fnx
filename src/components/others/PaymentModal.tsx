"use client";

import Image from "next/image";
import { useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function PaymentModal({
  isOpen,
  onClose,
  onContinue,
}: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<"bKash" | "Cash">(
    "bKash"
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-emerald-600 text-white rounded-lg w-80 p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-emerald-600 p-2 rounded-lg mb-2">
            <Image
              src="https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/99d56c91-c0a1-4431-e762-1b26af377a00/public"
              alt="Cash"
              width={300}
              height={300}
              className="w-4/5 h-full object-cover"
            />
          </div>
          <h2 className="text-xl text-[#FDE8CD] px-10 text-center font-semibold">
            Choose Payment Method
          </h2>
        </div>

        <div className="space-y-4 mb-6">
          <div
            className="flex items-start cursor-pointer"
            onClick={() => setSelectedMethod("bKash")}
          >
            <div className="flex items-center h-5 mt-1">
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  selectedMethod === "bKash"
                    ? "border-white"
                    : "border-gray-300"
                }`}
              >
                {selectedMethod === "bKash" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
            <div className="ml-3 text-sm">
              <div className="flex items-center gap-1">
                <label className="font-medium text-white">bKash</label>
                <Image
                  src="https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/d7c06c9c-b1d9-40fd-89f8-ce1f02f26400/public"
                  alt="Cash"
                  width={300}
                  height={300}
                  className="w-4 h-full object-cover"
                />
              </div>
              <p className="text-gray-200 text-xs">
                Pay the payment now via bKash to confirm your spot instantly.
              </p>
            </div>
          </div>

          <div
            className="flex items-start cursor-pointer"
            onClick={() => setSelectedMethod("Cash")}
          >
            <div className="flex items-center h-5 mt-1">
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  selectedMethod === "Cash" ? "border-white" : "border-gray-300"
                }`}
              >
                {selectedMethod === "Cash" && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
            <div className="ml-3 text-sm">
              <div className="flex items-center gap-1">
                <label className="font-medium text-white">Cash</label>
                <Image
                  src="https://imagedelivery.net/upczkOXHorYX26Lz6iRC9A/9114e54c-be76-4a44-4e24-adce695fbe00/public"
                  alt="Cash"
                  width={300}
                  height={300}
                  className="w-4 h-full object-cover"
                />
              </div>
              <p className="text-gray-200 text-xs">
                Pay the sport fee directly to the host before the game starts.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-black text-white py-2 px-4 rounded-full font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
