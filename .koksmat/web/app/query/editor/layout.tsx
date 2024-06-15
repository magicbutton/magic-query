/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Icdgrkit9YU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";

export default function Component(props: { children: any }) {
  const { children } = props;
  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr] bg-gray-100 dark:bg-gray-950">
      <div className="border-r border-gray-200 dark:border-gray-800">
        <div className="flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
          <GitBranchIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <h2 className="font-medium">History</h2>
        </div>
        <div className="flex flex-col divide-y divide-gray-200 overflow-y-auto dark:divide-gray-800">
          <div className="space-y-2 p-4">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-gray-500 dark:text-gray-400">Today</span>
              <PlusIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="flex items-center gap-2 rounded-md bg-gray-200 p-2 text-sm font-medium dark:bg-gray-800">
              <GitCommitVerticalIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>Added README file</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-gray-200 p-2 text-sm font-medium dark:bg-gray-800">
              <GitCommitVerticalIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>Updated package.json</span>
            </div>
          </div>
          <div className="space-y-2 p-4">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-gray-500 dark:text-gray-400">
                Yesterday
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-gray-200 p-2 text-sm font-medium dark:bg-gray-800">
              <GitCommitVerticalIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>Initial commit</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
          <CodeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <h2 className="font-medium">src/App.tsx</h2>
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
        <div className="flex-1 overflow-hidden">
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

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

function GitBranchIcon(props: IconProps) {
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
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function GitCommitVerticalIcon(props: IconProps) {
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
      <path d="M12 3v6" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15v6" />
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

function PlusIcon(props: IconProps) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
