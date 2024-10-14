import React from "react";

const Displaytickets = ({ ticketsSelected ,returnHandler}) => {
  return (

  <>
    <div className="flex gap-12 flex-wrap">
      {ticketsSelected.map((ele,id) => (
        <div key={id} className="p-8 text-2xl bg-green-200 text-white flex justify-center items-center rounded-md ">
          {ele}
        </div>
      ))}
    </div>
    <button className="px-2 py-4 bg-white w-16 mt-4 mg-6 flex justify-center items-center hover:bg-zinc-300 rounded-md " onClick={returnHandler}>Return</button>
    </>
  );
};

export default Displaytickets;
