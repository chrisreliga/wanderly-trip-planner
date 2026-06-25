import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

type Props = {
  card: {
    name: string;
    category: string;
    note: string;
    time: string;
    id: number;
  };
  dayId: number;
  setShowForm: (value: boolean) => void;
};

export default function PlaceCard({ card, dayId, setShowForm }: Props) {
  const {
    handleAddPlace,
    handleDeletePlace,
    customCategories,
    handleAddCategory,
  } = useContext(GlobalContext)!;

  const [isEditing, setIsEditing] = useState(!card.name);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [errors, setErrors] = useState({});
  const [draft, setDraft] = useState<Props["card"]>({
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
        <div className="place-card-delete-btn-spacing">
          <h3>{card.name}</h3>
          <button
            className="place-card-delete-btn"
            onClick={() => handleDeletePlace({ dayId, cardId: card.id })}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      )}
      {isEditing ? (
        isAddingCategory ? (
          <input
            type="text"
            className="card-cat-select input"
            onChange={(e) => setDraft({ ...draft, category: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddCategory(draft.category);

                setIsAddingCategory(false);
              }
            }}
          />
        ) : (
          <select
            className="card-cat-select input"
            value={draft.category}
            onChange={(e) => {
              if (e.target.value === "__custom__") {
                setIsAddingCategory(true);
              } else {
                setDraft({ ...draft, category: e.target.value });
              }
            }}
          >
            <option></option>
            <option>Landmark</option>
            <option>Restaurant</option>
            <option>Activity</option>
            {customCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
            <option value="__custom__">Add Category...</option>
          </select>
        )
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
              if (draft.name !== "") handleAddPlace({ dayId, draft });

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
