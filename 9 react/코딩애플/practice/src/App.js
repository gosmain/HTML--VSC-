import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodingApple from "./Routes/CodingApple";
import Nomad from "./Routes/Nomad";
import NomadCoins from "./Routes/NomadCoins";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodingApple />} />
        <Route path="/Nomad" element={<Nomad />} />
        <Route path="/NomadCoins" element={<NomadCoins />} />
      </Routes>
    </Router>
  )
}


export default App;

