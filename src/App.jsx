import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import Board from "./components/Board.jsx";
import MapView from "./components/MapView.jsx";

import { GlobalProvider } from "./context/GlobalState.jsx";
import { useActiveTab } from "./hooks/useActiveTab.ts";

function App() {
  const { activeTab, setActiveTab } = useActiveTab();

  return (
    <GlobalProvider>
      <Navbar />
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "map" ? <MapView /> : <Board />}
    </GlobalProvider>
  );
}

export default App;
