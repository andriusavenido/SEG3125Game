import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Game from './pages/Game';
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Selection from "./pages/Selection";

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <div className="pages bg-light p-4 min-vh-100 text-dark">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/selection" element={<Selection/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="*" element={<>404. Page not found!</>} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
