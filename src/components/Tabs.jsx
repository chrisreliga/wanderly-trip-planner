export default function Tabs() {
  return (
    <div className="tabs-wrapper">
      <ul className="tabs">
        <li>
          <button className="active">Board View</button>
        </li>
        <li>
          <button>List View</button>
        </li>
        <li>
          <button>Map View</button>
        </li>
      </ul>
    </div>
  );
}
