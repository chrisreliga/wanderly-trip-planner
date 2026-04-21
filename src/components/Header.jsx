import App from "../App";

export default function Header({ trip, handleAddDay }) {
  return (
    <header className="header">
      <div className="header-text">
        <h1>{trip.label}</h1>
        <div className="trip-details">
          <p>🗓️ {trip.dates}</p>
          <p>🇺🇸 {trip.country}</p>
          <p className="trip-length">{trip.tripLength} Days</p>
        </div>
      </div>

      <button onClick={handleAddDay} className="header-button">
        + Add Day
      </button>
    </header>
  );
}
