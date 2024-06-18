// utils/groupQueriesByDate.ts
import { format, isToday, isYesterday, subDays } from "date-fns";
export interface IQueryHistoryWithLabelIdDate {
  id: string;
  label: string;
  date: string; // Assuming date is in ISO format
}

export const groupQueriesByDate = (queries: IQueryHistoryWithLabelIdDate[]) => {
  const today: IQueryHistoryWithLabelIdDate[] = [];
  const yesterday: IQueryHistoryWithLabelIdDate[] = [];
  const last7Days: IQueryHistoryWithLabelIdDate[] = [];
  const older: IQueryHistoryWithLabelIdDate[] = [];

  const now = new Date();

  queries.forEach((query) => {
    const queryDate = new Date(query.date);

    if (isToday(queryDate)) {
      today.push(query);
    } else if (isYesterday(queryDate)) {
      yesterday.push(query);
    } else if (queryDate >= subDays(now, 7)) {
      last7Days.push(query);
    } else {
      older.push(query);
    }
  });

  return { today, yesterday, last7Days, older };
};
