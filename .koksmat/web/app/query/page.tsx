"use client";

import SearchPerson from "@/app/magic/services/magic-people/person/components/search";
import { useRouter } from "next/navigation";
import { APPNAME } from "../global";

export default function Page() {
  const router = useRouter();
  return (
    <div className="space-x-2 h-[90vh]">
      <SearchPerson
        onItemClick={(item) => {
          router.push(`/${APPNAME}/persons/${item.id}`);
        }}
      />
    </div>
  );
}
