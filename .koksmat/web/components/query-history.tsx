import React from "react";

import {
  groupQueriesByDate,
  IQueryHistoryWithLabelIdDate,
} from "@/utils/groupQueriesByDate";

export function QueryHistory(props: {
  queries: IQueryHistoryWithLabelIdDate[];
  onClick?: (query: IQueryHistoryWithLabelIdDate) => void;
}) {
  const { queries } = props;

  const { today, yesterday, last7Days, older } = groupQueriesByDate(queries);

  const renderQueries = (
    queries: IQueryHistoryWithLabelIdDate[],
    title: string
  ) => (
    <div>
      <h2 className="text-xl font-bold mb-2 space-y-2 ">{title}</h2>
      <div className="">
        {queries.map((query) => (
          <div
            key={query.id}
            className="bg-white shadow-md rounded-lg p-4 m-2 hover:bg-slate-100 cursor-pointer"
            onClick={() => props.onClick && props.onClick(query)}
          >
            <h3 className="text-lg font-semibold">{query.label}</h3>
            <p className="text-gray-500">
              {new Date(query.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4  h-[calc(100vh-100px)] overflow-scroll">
      {today.length > 0 && renderQueries(today, "Today")}
      {yesterday.length > 0 && renderQueries(yesterday, "Yesterday")}
      {last7Days.length > 0 && renderQueries(last7Days, "Last 7 Days")}
      {older.length > 0 && renderQueries(older, "Older")}
    </div>
  );
}
