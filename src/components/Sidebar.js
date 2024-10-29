import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import Excel from "./ImportExcel";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <Excel />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
