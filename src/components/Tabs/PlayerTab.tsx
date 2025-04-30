import { eventDetails, players } from '@/lib/data/data';
import React from 'react';

const PlayerTab = () => {
    return (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Players</h2>
              <div className="flex items-center gap-2">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>{eventDetails.spotsFilled}</span>
              </div>
            </div>
            <div className="space-y-2">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="flex justify-between items-center bg-emerald-700 text-white p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-medium">
                      {player.initials}
                    </div>
                    <div>
                      <p className="font-medium">
                        {player.name}{" "}
                        {player.isHost && (
                          <span className="text-xs text-gray-300">(Host)</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <button className="bg-white text-emerald-700 rounded-lg px-4 py-2 text-sm font-medium">
                    Message
                  </button>
                </div>
              ))}
            </div>
          </div>
    );
};

export default PlayerTab;