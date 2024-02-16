import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurProjects from "./pages/OurProjects";
import Cusservice from "./pages/Cusservice";
import Whowe from "./pages/Whowe";
import Directors from "./pages/Directors";
import HR from "./pages/HR";
import Srespons from "./pages/Srespons";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Vacancies from "./pages/Vacancies";
import Apply from "./pages/Apply";
import Conn from "./pages/conn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourProjects" element={<OurProjects />} />
        <Route path="cusservice" element={<Cusservice />} />
        <Route path="whowe" element={<Whowe />} />
        <Route path="directors" element={<Directors />} />
        <Route path="hR" element={<HR />} />
        <Route path="srespons" element={<Srespons />} />
        <Route path="news" element={<News />} />
        <Route path="videos" element={<Videos />} />
        <Route path="vacancies" element={<Vacancies />} />
        <Route path="apply" element={<Apply />} />
        <Route path="conn" element={<Conn />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
