import { useState } from "react";
import Data from "./Data";
import "./style.css";

export default function Index() {
  const [selected, setSelected] = useState(null);
  function HandleSingleSelection(getCurrentId){
    setSelected(getCurrentId);
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {Data && Data.length > 0 ? (
          Data.map((dataItem) => (
            <div className="item">
              <div className="title" onClick={()=>HandleSingleSelection(dataItem.id)}>
                <h2>{dataItem.question}</h2>
              <span>+</span>
              </div>
              {
                selected === dataItem.id ? 
                <div className="content">{dataItem.answer}</div>
                : null
              }
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
