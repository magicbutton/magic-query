"use client";
import { useSQLSelect } from "@/app/koksmat/usesqlselect";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Icdgrkit9YU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useSQLSelect2 } from "@/app/koksmat/usesqlselect2";
import { QueryHistory } from "@/components/query-history";
import { Button } from "@/components/ui/button";
import { IQueryHistoryWithLabelIdDate } from "@/utils/groupQueriesByDate";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function Component(props: { children: any }) {
  const { children } = props;
  const router = useRouter();
  const queryHistoryData2 = useSQLSelect2<IQueryHistoryWithLabelIdDate>(
    "magic-mix.app",
    "select updated_at as date,name as label,id from sql"
  );
  return (
    <div className="grid grid-cols-[240px_1fr]  dark:bg-gray-950  w-full p-3">
      <div className="border-r border-gray-200 dark:border-gray-800 overflow-scroll">
        <div className="flex h-16 gap-4 border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900 ">
          <GitBranchIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <h2 className="font-medium">History</h2>
          {/* <pre>{JSON.stringify(queryHistoryData2, null, 2)}</pre> */}
        </div>
        <div className="overflow-scroll max-h-full  ">
          <QueryHistory
            queries={queryHistoryData2.dataset}
            onClick={(q) => {
              router.push(`/query/editor/sql/${q.id}`);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex-1 overflow-hidden">
          <div className="h-full w-full ">{children}</div>
        </div>
      </div>
    </div>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

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
