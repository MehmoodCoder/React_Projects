import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorite";
import Details from "./Pages/Details";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,113,133,0.2),_transparent_35%),linear-gradient(135deg,_#fff7ed_0%,_#fff1f2_45%,_#fef2f2_100%)] text-slate-700">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="flex-1 py-4 sm:py-6 lg:py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;