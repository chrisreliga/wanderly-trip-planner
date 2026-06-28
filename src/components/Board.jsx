import DayColumn from "./DayColumn";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Board() {
  const { tripInfo } = useContext(GlobalContext);

  return (
    <section className="board">
      {tripInfo.days.map((day) => (
        <DayColumn day={day} key={day.id} id={day.id} />
      ))}
    </section>
  );
}
