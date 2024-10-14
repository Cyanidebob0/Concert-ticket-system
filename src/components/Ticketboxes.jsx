import React from "react";

const Ticketboxes = ({ from,to,onClickHandler,ticketsSelected}) => {
  let arr1 = [];
  for (let i = from; i <= to; i++) {
    let isSelected=ticketsSelected.includes(i);
    let color=isSelected?"bg-green-200":"bg-pink-200"
    arr1.push(<div id={i} key={i} className={`p-8 text-2xl ${color} text-white flex justify-center items-center rounded-md hover:bg-pink-300 cursor-pointer `} onClick={onClickHandler}>{i}</div>)
  }
  return <div className="flex gap-12 flex-wrap">{arr1}</div>;
};

export default Ticketboxes;
