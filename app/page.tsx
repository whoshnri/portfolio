import React from "react";
import Pager from "./Pager";
import { cn } from "@/lib/utils";

export default function page() {
  return (
   
<div className="bg-black">
      <div
        className={cn(
          "inset-0 opacity-5 fixed",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <Pager />
      
    </div>
  );
}
