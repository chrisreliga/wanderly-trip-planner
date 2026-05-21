import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import Board from "./components/Board.jsx";

import { GlobalProvider } from "./context/GlobalState.jsx";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Header />
      <Tabs />
      <Board />
    </GlobalProvider>
  );
}

export default App;
