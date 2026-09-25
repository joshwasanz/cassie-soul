import { useState } from "react";

export const CreateTask = () => {
  const [show, setShow] = useState(false);

   return (
    <div className="bg-blue-200" >
        <button className="bg-blue-700 px-5 py-4 rounded-4xl text-amber-50 font-bold"
        onClick={()=>setShow(true)} >show pop up</button>

        {show && (
            <div>pop up
                <button onClick={()=>setShow(false)} >close</button>
            </div>
        )}
    </div>
  );
};
