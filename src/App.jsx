import { useState } from "react";
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import Navbar from "./components/Navbar.jsx";
import Board from "./components/Board.jsx";
import { trip } from "./data.js";

function App() {
  const [tripInfo, setTripInfo] = useState(trip);

  function handleAddDay() {
    setTripInfo({
      ...tripInfo,
      days: [
        ...tripInfo.days,
        {
          label: "",
          date: "",
          id: Date.now(),
          cards: [],
        },
      ],
    });
  }

  function handleAddDayHeader(dayId, draft) {
    setTripInfo({
      ...tripInfo,
      days: tripInfo.days.map((day) => {
        if (day.id === dayId)
          return {
            ...day,
            label: draft.label,
            date: draft.date,
          };
        else return day;
      }),
    });
  }

  function handleAddPlace(dayId, draft) {
    setTripInfo({
      ...tripInfo,
      days: tripInfo.days.map((day) => {
        if (day.id === dayId)
          return {
            ...day,
            cards: [
              ...day.cards,
              {
                name: draft.name,
                category: draft.category,
                note: draft.note,
                id: draft.id,
              },
            ],
          };
        else return day;
      }),
    });
  }

  function handleDeleteDay(dayId) {
    setTripInfo({
      ...tripInfo,
      days: tripInfo.days.filter((day) => {
        return dayId !== day.id;
      }),
    });
  }

  return (
    <>
      <Navbar />
      <Header handleAddDay={handleAddDay} trip={tripInfo} />
      <Tabs />
      <Board
        handleAddPlace={handleAddPlace}
        handleDeleteDay={handleDeleteDay}
        handleAddDayHeader={handleAddDayHeader}
        days={tripInfo.days}
      />
    </>
  );
}

export default App;
