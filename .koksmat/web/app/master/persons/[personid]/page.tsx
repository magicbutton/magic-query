"use client";
import ReadPerson from "@/app/magic/services/magic-people/person/components/read";
import SearchPerson from "@/app/magic/services/magic-people/person/components/search";
import { useRouter } from "next/navigation";

export default function Person(props: { params: { personid: number } }) {
  const router = useRouter();
  return (
    <div>
      <ReadPerson id={props.params.personid} />
    </div>
  );
}
