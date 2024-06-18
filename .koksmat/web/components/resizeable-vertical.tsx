"use client";
import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizeableVertical() {
  return (
    <div className="h-[400px] w-full max-w-2xl border border-gray-200 rounded-lg dark:border-gray-800">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={50}>
          <Textarea
            className="h-full w-full resize-none border-0 focus:ring-0 dark:bg-gray-950"
            placeholder="Top text area"
          />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <Textarea
            className="h-full w-full resize-none border-0 focus:ring-0 dark:bg-gray-950"
            placeholder="Bottom text area"
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
