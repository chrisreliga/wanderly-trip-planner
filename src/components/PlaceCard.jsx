import { useState } from "react";
import useTrip from "../hooks/useTrip";

export default function PlaceCard({ card, dayId, setShowForm }) {
  const { handleAddPlace } = useTrip();

  const [isEditing, setIsEditing] = useState(!card.name);
  const [draft, setDraft] = useState({
    name: card.name,
    category: card.category,
    note: card.note,
    time: card.time,
    id: card.id,
  });

  return (
    <article className={`place-cards ${isEditing ? "editing-style" : null}`}>
      {isEditing ? (
        <input
          type="text"
          className="card-name-input input"
          placeholder="What are you doing today?"
          value={draft.name}
          onChange={(e) =>
            setDraft({
              ...draft,
              name: e.target.value,
            })
          }
        />
      ) : (
        <h3>{card.name}</h3>
      )}
      {isEditing ? (
        <select
          className="card-cat-select input"
          value={draft.category}
          onChange={(e) => setDraft({ ...draft, category: e.target.value })}
        >
          <option></option>
          <option>Landmark</option>
          <option>Restaurant</option>
          <option>Activity</option>
        </select>
      ) : (
        <p className="card-category">{card.category}</p>
      )}
      {isEditing ? (
        <input
          type="text"
          className="card-note-input input"
          placeholder="Add a note..."
          value={draft.note}
          onChange={(e) =>
            setDraft({
              ...draft,
              note: e.target.value,
            })
          }
        />
      ) : (
        <p className="card-note">{card.note}</p>
      )}
      {isEditing ? (
        <input
          type="time"
          className="card-time-input input"
          value={draft.time}
          onChange={(e) =>
            setDraft({
              ...draft,
              time: e.target.value,
            })
          }
        ></input>
      ) : (
        <span className="card-time">{card.time}</span>
      )}

      <div className="edit-btns-container">
        {isEditing ? (
          <button
            className="edit-btn-cancel"
            onClick={() => {
              setIsEditing(false);
              setDraft(card);
              setShowForm(false);
            }}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        ) : null}
        {isEditing ? (
          <button
            className="edit-btn-save"
            onClick={() => {
              {
                handleAddPlace && draft.name !== ""
                  ? handleAddPlace(dayId, draft)
                  : null;
              }

              setIsEditing(false);

              setShowForm(false);
            }}
          >
            Save
          </button>
        ) : null}
      </div>
    </article>
  );
}
