"use client";
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
import { useContext, useEffect, useState } from "react";
import { PromptGenerator } from "./promptgenerator";
import { ChatGPT1 } from "./chatgpt1";
import { SQLItem } from "@/app/magic/services/magic-mix/sql/applogic/model";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./ui/resizable";

export interface SQLItemEditorProps {
  dataItem?: SQLItem;
  onSave?: (item: SQLItem) => void;
  onAdd?: (item: SQLItem) => void;
}
export function Editor(props: SQLItemEditorProps) {
  const item = props.dataItem;
  const [view, setView] = useState<"view" | "sql" | "ai" | "tsx">();
  useEffect(() => {
    const view = localStorage.getItem("editorviewstate");
    if (view) {
      setView(view as any);
    }
  }, []);
  function setViewAndSave(view: "view" | "sql" | "ai" | "tsx") {
    localStorage.setItem("editorviewstate", view);
    setView(view);
  }
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
          <div className="flex flex-col h-full w-full ">
            <div className="h-full w-full max-w-2xl border border-gray-200 rounded-lg dark:border-gray-800">
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50}>
                  <Textarea
                    defaultValue={item?.query}
                    className="h-full w-full resize-none border-0 focus:ring-0 dark:bg-gray-950"
                    placeholder="Top text area"
                  />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <Textarea
                    className="h-full w-full resize-none border-0 focus:ring-0 dark:bg-gray-950"
                    placeholder="Bottom text area"
                  />
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>
        );
      case "ai":
        return (
          <div className="flex  h-full w-full text-2xl text-gray-500 dark:text-gray-400 bg-yellow-400">
            <ChatGPT1 />
          </div>
        );
      case "tsx":
        return (
          <Textarea
            placeholder="Enter your TypeScript code here..."
            className="w-full h-full p-4 border border-gray-200 rounded-lg dark:border-gray-800 bg-red-400"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
        <CodeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        <h2 className="font-medium">{item?.name}</h2>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <EyeIcon className="h-4 w-4" />
            <span className="sr-only">Preview</span>
          </Button>
          <Button variant="ghost" size="sm">
            <PlayIcon className="h-4 w-4" />
            <span className="sr-only">Run</span>
          </Button>
        </div>
      </div>
      <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="bg-red-100">
            <FilePlusIcon className="w-4 h-4 mr-2" />
            New Query
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              if (props.onAdd && item) {
                props.onAdd(item);
              }
            }}
          >
            <SaveIcon className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" className="bg-red-100">
            <SaveAllIcon className="w-4 h-4 mr-2" />
            Save As
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-red-100">
                <DatabaseIcon className="w-4 h-4 mr-2" />
                Database Connection
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] bg-red-100">
              <DropdownMenuItem>Local PostgreSQL</DropdownMenuItem>
              <DropdownMenuItem>Cloud MySQL</DropdownMenuItem>
              <DropdownMenuItem>Remote Oracle</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative  bg-red-100">
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
                  onClick={() => setViewAndSave("view")}
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
                  onClick={() => setViewAndSave("sql")}
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
                  onClick={() => setViewAndSave("ai")}
                >
                  <BotIcon className="w-4 h-4" />
                  <span className="sr-only">AI Prompt</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>AI Prompt</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="default" onClick={() => setViewAndSave("tsx")}>
                  <CodeIcon className="w-4 h-4" />
                  &nbsp; Code
                </Button>
              </TooltipTrigger>
              <TooltipContent>Code</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>
      <main className="overflow-auto  h-full">
        <div className="h-full p-4 grow">{renderContent()}</div>
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

function EyeIcon(props: IconProps) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function PlayIcon(props: IconProps) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
