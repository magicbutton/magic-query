"use client";

import SearchCountry from "@/app/magic/services/magic-people/country/components/search";
import { useSQLSelect } from "@/app/koksmat/usesqlselect";

function RootLevel() {
  const rootLevel = useSQLSelect(
    "magic-people.app",
    `

    SELECT EmployeeId,
    fullname,
    '/' || L1 || '/' || L2 || '/' || L3 || '/' || L4 || '/' || L5 || '/' || L6 || '/' || L7 || '/' || L8 || '/' || L9 || '/' || L10 || '/' || L11 AS PATH,
    Email,
    Gender,
    Legal1,
    Legal2,
    Location1,
    Location2,
    Location3,
    Location4
FROM
(SELECT id,
       "Employee ID (column 0)" AS EmployeeId,
       "Full name (column 1)" AS fullname,
       "Business unit level 1 (column 2)" AS L1,
       "Business unit level 2 (column 3)" AS L2,
       "Business unit level 3 (column 4)" AS L3,
       "Business unit level 4 (column 5)" AS L4,
       "Business unit level 5 (column 6)" AS L5,
       "Business unit level 6 (column 7)" AS L6,
       "Business unit level 7 (column 8)" AS L7,
       "Business unit level 8 (column 9)" AS L8,
       "Business unit level 9 (column 10)" AS L9,
       "Business unit level 10 (column 11)" AS L10,
       "Business unit level 11 (column 12)" AS L11,
       "Email (column 13)" AS Email,
       "Gender (column 14)" AS Gender,
       "Legal entity level 1 (column 15)" AS Legal1,
       "Legal entity level 2 (column 16)" AS Legal2,
       "Location level 1 (column 17)" AS Location1,
       "Location level 2 (column 18)" AS Location2,
       "Location level 3 (column 19)" AS Location3,
       "Location level 4 (column 20)" AS Location4
FROM excel."AllUsers") AS ExcelUsers
order by path
limit 100
  `
  );
  return (
    <div>
      <pre>{JSON.stringify(rootLevel, null, 2)}</pre>
    </div>
  );
}
export default function Company() {
  return (
    <div>
      Organisation
      <RootLevel></RootLevel>
    </div>
  );
}
