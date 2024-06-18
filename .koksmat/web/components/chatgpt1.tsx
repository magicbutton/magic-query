/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SvJHH5CQMwO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar } from "@/components/ui/avatar";
import React from "react";

const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
};

export function ChatGPT1() {
  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-gray-900">
      <header className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          ChatApp
        </h1>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto py-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <Avatar className="w-8 h-8 bg-gray-300 rounded-full" />
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 max-w-md">
                <p className="text-gray-800 dark:text-gray-200">
                  Hi there! How can I assist you today?
                </p>
              </div>
            </div>
            <div className="flex items-end gap-2 ml-auto">
              <div className="bg-blue-500 text-white rounded-lg p-2 max-w-md">
                <p>
                  Hello! I'm looking for information on how to plan a trip to
                  Paris.
                </p>
              </div>
              <Avatar className="w-8 h-8 bg-blue-500 text-white rounded-full">
                YO
              </Avatar>
            </div>
            <div className="flex items-start gap-2">
              <Avatar className="w-8 h-8 bg-gray-300 rounded-full" />
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 max-w-md">
                <p className="text-gray-800 dark:text-gray-200">
                  Here are some tips for planning a trip to Paris:
                </p>
                <ul className="list-disc list-inside">
                  <li>Decide when you want to visit (peak season is summer)</li>
                  <li>Book your flights and accommodation well in advance</li>
                  <li>Make a list of the top attractions you want to see</li>
                  <li>Research transportation options within the city</li>
                  <li>Learn some basic French phrases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gray-100 dark:bg-gray-800 p-4">
        <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg p-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-200 px-2"
          />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2 flex items-center justify-center">
            <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
