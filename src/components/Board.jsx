import DayColumn from "./DayColumn";

export default function Board({
  days,
  handleAddPlace,
  handleDeleteDay,
  handleAddDayHeader,
}) {
  return (
    <section className="board">
      {days.map((day) => (
        <DayColumn
          handleAddPlace={handleAddPlace}
          handleDeleteDay={handleDeleteDay}
          handleAddDayHeader={handleAddDayHeader}
          day={day}
          key={day.id}
          id={day.id}
        />
      ))}
    </section>
  );
}
