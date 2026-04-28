import { useState } from "react";
import useTrip from "../hooks/useTrip.js";
import PlaceCard from "./PlaceCard";

export default function DayColumn({ day, id }) {
  const { handleAddDayHeader, handleDeleteDay } = useTrip();

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(!day.label);
  const [draft, setDraft] = useState({
    label: day.label,
    date: day.date,
    id: day.id,
  });

  return (
    <section className="day-column">
      {isEditing ? (
        <form>
          <div className="column-header">
            <div className="column-header-spacing">
              <input
                type="text"
                placeholder="Add day here..."
                value={draft.label}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    label: e.target.value,
                  })
                }
              />
              <button
                className="save-day-header"
                onClick={() => {
                  handleAddDayHeader(id, draft);
                  setIsEditing(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="column-header">
          <div>
            <h2>{day.label}</h2>
            <p>{day.date}</p>
          </div>
          <span>{day.cards.length} places</span>
        </div>
      )}

      {day.cards.map((card) => (
        <PlaceCard card={card} key={card.id} dayId={id} />
      ))}

      {showForm ? (
        <PlaceCard
          setShowForm={setShowForm}
          card={{
            name: "",
            category: "",
            note: "",
            id: Date.now(),
          }}
          dayId={id}
        />
      ) : null}

      <button onClick={() => setShowForm(!showForm)}>+ Add a Place</button>
      <button
        onClick={() => {
          handleDeleteDay(id);
        }}
        className="delete-day-btn"
      >
        Delete
      </button>
    </section>
  );
}
