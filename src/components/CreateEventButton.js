import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      style={{
        marginLeft:"1rem"
      }}
    >
      <img src={"https://cdn-icons-png.freepik.com/512/7477/7477497.png"} alt="create_event" className="w-8 h-7" style={{
        marginLeft:"1rem"
      }}/>
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
