"use client";
import { APPNAME } from "@/app/global";
import SearchPerson from "@/app/magic/services/magic-people/person/components/search";
import { useRouter } from "next/navigation";

export default function Person() {
  const router = useRouter();
  return (
    <div>
      <SearchPerson
        onItemClick={(item) => {
          router.push(`/${APPNAME}/persons/${item.id}`);
        }}
      />
    </div>
  );
}
