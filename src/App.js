import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import EditCard from "./pages/EditCard/EditCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<EditCard />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
