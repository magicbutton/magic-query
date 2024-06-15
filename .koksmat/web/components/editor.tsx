import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { PromptGenerator } from "./promptgenerator";

export function Editor() {
  const [view, setView] = useState<"view" | "sql" | "ai" | "tsx">("view");

  const renderContent = () => {
    switch (view) {
      case "view":
        return (
          <div className="flex items-center justify-center h-full text-2xl text-gray-500 dark:text-gray-400">
            View Result
          </div>
        );
      case "sql":
        return (
          <Textarea
            placeholder="Enter your SQL query here..."
            className="w-full h-full p-4 border border-gray-200 rounded-lg dark:border-gray-800"
          />
        );
      case "ai":
        return (
          <div className="flex justify-center h-full text-2xl text-gray-500 dark:text-gray-400">
            <PromptGenerator />
          </div>
        );
      case "tsx":
        return (
          <Textarea
            placeholder="Enter your TypeScript code here..."
            className="w-full h-full p-4 border border-gray-200 rounded-lg dark:border-gray-800"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <FilePlusIcon className="w-4 h-4 mr-2" />
            New Query
          </Button>
          <Button variant="outline">
            <SaveIcon className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline">
            <SaveAllIcon className="w-4 h-4 mr-2" />
            Save As
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <DatabaseIcon className="w-4 h-4 mr-2" />
                Database Connection
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
              <DropdownMenuItem>Local PostgreSQL</DropdownMenuItem>
              <DropdownMenuItem>Cloud MySQL</DropdownMenuItem>
              <DropdownMenuItem>Remote Oracle</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search queries..."
              className="w-[200px]"
            />
            <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setView("view")}
                >
                  <ViewIcon className="w-4 h-4" />
                  <span className="sr-only">View Result</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>View Result</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setView("sql")}
                >
                  <CodeIcon className="w-4 h-4" />
                  <span className="sr-only">SQL</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>SQL</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setView("ai")}
                >
                  <BotIcon className="w-4 h-4" />
                  <span className="sr-only">AI Prompt</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>AI Prompt</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="default" onClick={() => setView("tsx")}>
                  <CodeIcon className="w-4 h-4" />
                  &nbsp; Code
                </Button>
              </TooltipTrigger>
              <TooltipContent>Code</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="h-full p-4">{renderContent()}</div>
      </main>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function BotIcon(props: IconProps) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function CodeIcon(props: IconProps) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props: IconProps) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function FilePlusIcon(props: IconProps) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M9 15h6" />
      <path d="M12 18v-6" />
    </svg>
  );
}

function SaveAllIcon(props: IconProps) {
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
      <path d="M10 2v3a1 1 0 0 0 1 1h5" />
      <path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" />
      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
      <path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" />
    </svg>
  );
}

function SaveIcon(props: IconProps) {
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
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  );
}

function SearchIcon(props: IconProps) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ViewIcon(props: IconProps) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}
