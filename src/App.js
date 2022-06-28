import BattleCry from "./components/battleCryPage/battleCry";
import Home from "./components/homePage/home";
import Roadmap from "./components/roadmapPage/roadmap";
import FablesMyths from "./components/fablesMythsPage/fablesMyths";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="battlecry" element={<BattleCry />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="fablesmyths" element={<FablesMyths />} />
            {/* <Route path="story" element={<Story />} /> */}
          </Routes>
  );
}

export default App;
