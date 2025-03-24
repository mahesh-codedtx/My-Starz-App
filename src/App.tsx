import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Header from "./layouts/Header/header";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <main className="main-background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/schedule" element={<MovieDetailPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
