import React, { useContext } from "react";
import FileModal from "./FileModal"
export default function ImportExcel() {

  function review() {
    console.log("Hello world" )
    return(
      <>
      <div class="modal" tabindex="-1" role="dialog"></div>
      </>
    )
  }

  return (
    <button
      onClick={review}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      style={{
         marginLeft:"1rem",
         marginTop: "1rem"
      }}
    >
      <img src={"https://icons.veryicon.com/png/o/system/hywf-background-icon/import-37.png"} alt="import_event" className="w-8 h-7" style={{
            marginLeft:"1rem",
        }}/>
      <span className="pl-3 pr-7"> Import</span>
    </button>
  );
}
