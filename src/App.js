import BattleCry from "./components/battleCryPage/battleCry";
import Home from "./components/homePage/home";
import Roadmap from "./components/roadmapPage/roadmap";
import FablesMyths from "./components/fablesMythsPage/fablesMyths";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation()
  return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="battlecry" element={<BattleCry />} />
              <Route path="roadmap" element={<Roadmap />} />
              <Route path="fablesmyths" element={<FablesMyths />} />
              {/* <Route path="story" element={<Story />} /> */}
          </Routes>
        </AnimatePresence>
        
  );
}

export default App;
