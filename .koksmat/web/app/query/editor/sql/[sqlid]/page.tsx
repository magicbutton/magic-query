"use client";

import { useService } from "@/app/koksmat/useservice";
import { SQLItem } from "@/app/magic/services/magic-mix/sql/applogic/model";
import { Editor } from "@/components/editor";
import { sq } from "date-fns/locale";
import { useState } from "react";

export default function Page(props: {
  params: {
    sqlid: string;
  };
}) {
  const { sqlid } = props.params;
  const [transactionId, settransactionId] = useState(0);
  const readResult = useService<SQLItem>(
    "magic-mix.sql",
    ["read", sqlid],
    "",
    6000,
    transactionId.toString()
  );
  const sql = readResult.data;
  return <Editor dataItem={sql} />;
}
