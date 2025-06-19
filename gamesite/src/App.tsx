import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Game from './pages/game';

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <div className="pages bg-light p-4 min-vh-100 text-dark">
      <Routes>
        <Route path="/" element={<>test page</>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
