/**
 * v0 by Vercel.
 * @see https://v0.dev/t/v7xQfbX7VQr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function PromptGenerator() {
  const [prompt, setprompt] = useState("sdfde");
  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-4 xmin-h-screen">
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Tables & Views</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">users</span>
            <Checkbox id="users" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">products</span>
            <Checkbox id="products" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">orders</span>
            <Checkbox id="orders" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">payments</span>
            <Checkbox id="payments" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">v_order_details</span>
            <Checkbox id="v_order_details" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Enter your question..."
            className="w-full"
          />
          <Button variant="outline" size="icon">
            <ZapIcon className="w-4 h-4" />
            <span className="sr-only">Generate</span>
          </Button>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg relative ">
          <div className="absolute top-2 right-2">
            <Button variant="ghost" size="icon">
              <ClipboardIcon className="w-4 h-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          <pre className="whitespace-pre-wrap">
            <code>{prompt}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function ClipboardIcon(props: IconProps) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function ZapIcon(props: IconProps) {
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
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
