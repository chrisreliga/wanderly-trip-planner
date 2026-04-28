import DayColumn from "./DayColumn";
import useTrip from "../hooks/useTrip.js";

export default function Board() {
  const { tripInfo } = useTrip();

  return (
    <section className="board">
      {tripInfo.days.map((day) => (
        <DayColumn day={day} key={day.id} id={day.id} />
      ))}
    </section>
  );
}
