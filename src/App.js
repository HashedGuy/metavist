import BattleCry from "./components/battleCryPage/battleCry";
import Home from "./components/homePage/home";
import Roadmap from "./components/roadmapPage/roadmap";
import FablesMyths from "./components/fablesMythsPage/fablesMyths";
import NavigationMenu from "./components/navigation/navigationMenu";
import StickyNavigation from "./components/navigation/stickyNavigation";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationMenu/>
      <div className="dynamicSection">
        <StickyNavigation/>
        <div className="pagesContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="battlecry" element={<BattleCry />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="fablesmyths" element={<FablesMyths />} />
          </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default App;
