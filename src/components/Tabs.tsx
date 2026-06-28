type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Tabs({ activeTab, setActiveTab }: Props) {
  return (
    <div className="tabs-wrapper">
      <ul className="tabs">
        <li>
          <button
            onClick={() => setActiveTab("board")}
            className={activeTab === "board" ? "active" : undefined}
          >
            Board View
          </button>
        </li>
        <li>
          <button>List View</button>
        </li>
        <li>
          <button
            onClick={() => setActiveTab("map")}
            className={activeTab === "map" ? "active" : undefined}
          >
            Map View
          </button>
        </li>
      </ul>
    </div>
  );
}
