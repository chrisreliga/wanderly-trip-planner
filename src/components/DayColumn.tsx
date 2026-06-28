import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.tsx";

import PlaceCard from "./PlaceCard";

import { DayHeaderDraft } from "../types.ts";
import { PlaceCardDraft } from "../types.ts";

type Props = {
  day: {
    label: string;
    date: string;
    id: number;
    cards: PlaceCardDraft[];
  };
  id: number;
};

export default function DayColumn({ day, id }: Props) {
  const { handleAddDayHeader, handleDeleteDay } = useContext(GlobalContext)!;

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(!day.label);
  const [draft, setDraft] = useState<DayHeaderDraft>({
    label: day.label,
    date: day.date,
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
                  handleAddDayHeader({
                    dayId: day.id,
                    draft: draft,
                  });
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
        <PlaceCard
          card={card}
          key={card.id}
          dayId={id}
          setShowForm={setShowForm}
        />
      ))}

      {showForm ? (
        <PlaceCard
          setShowForm={setShowForm}
          card={{
            name: "",
            category: "",
            note: "",
            id: Date.now(),
            time: "",
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
