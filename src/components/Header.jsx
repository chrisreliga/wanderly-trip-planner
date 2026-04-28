import useTrip from "../hooks/useTrip.js";

export default function Header() {
  const { handleAddDay, tripInfo } = useTrip();

  return (
    <header className="header">
      <div className="header-text">
        <h1>{tripInfo.label}</h1>
        <div className="trip-details">
          <p>🗓️ {tripInfo.dates}</p>
          <p>🇺🇸 {tripInfo.country}</p>
          <p className="trip-length">{tripInfo.tripLength} Days</p>
        </div>
      </div>

      <button onClick={handleAddDay} className="header-button">
        + Add Day
      </button>
    </header>
  );
}
