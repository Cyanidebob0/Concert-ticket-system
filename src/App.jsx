import React, { useState } from "react";
import Ticketboxes from "./components/Ticketboxes";
import Displaytickets from "./components/Displaytickets";
const App = () => {
  const [ticketsSelected, setTicketsSelected] = useState([]);
  const [flag, setFlag] = useState(false);

  const onClickHandler = (event) => {
    let clickedId = Number(event.target.id);
    if (ticketsSelected.length < 5 || ticketsSelected.includes(clickedId)) {
      ticketsSelected.includes(clickedId)
        ? setTicketsSelected(ticketsSelected.filter((ele) => ele !== clickedId))
        : setTicketsSelected((prevevent) => [...prevevent, clickedId]);
    } else {
      alert("Only 5 tickets per person");
    }
  };

  const submitHandler = () => {
    setFlag(true);
  };
  const returnHandler=()=>{
    setFlag(false);
    setTicketsSelected([]);
}

  return !flag ? (
    <div className="min-h-screen w-full bg-cyan-100  flex flex-col items-center">
      <h1 className="text-center text-5xl mb-6"> Economy tickets</h1>
      <div>
        <Ticketboxes
          from={1}
          to={20}
          onClickHandler={onClickHandler}
          ticketsSelected={ticketsSelected}
        />
      </div>
      <h1 className="text-center text-5xl mb-6"> Economy tickets</h1>
      <div>
        <Ticketboxes
          from={21}
          to={50}
          onClickHandler={onClickHandler}
          ticketsSelected={ticketsSelected}
        />
      </div>
      <h1 className="text-center text-5xl mb-6"> Economy tickets</h1>
      <div>
        <Ticketboxes
          from={51}
          to={90}
          onClickHandler={onClickHandler}
          ticketsSelected={ticketsSelected}
        />
      </div>

      <button
        className="px-2 py-4 bg-white w-16 mt-4 mg-6 flex justify-center items-center hover:bg-zinc-300 rounded-md "
        onClick={submitHandler}
      >
        Submit
      </button>
    </div>
  ) : (
    <div className="min-h-screen w-full bg-cyan-100  flex flex-col items-center">
      <h1 className="text-center text-5xl mb-6">
        Your book have been confirmed
      </h1>

      <Displaytickets ticketsSelected={ticketsSelected} returnHandler={returnHandler} />
    </div>
  );
};

export default App;
