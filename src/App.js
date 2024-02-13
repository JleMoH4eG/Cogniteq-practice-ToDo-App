import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import EditCard from "./pages/EditCard/EditCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// /edit/:id
// <Route path="/" element={<Home />} />
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/edit/:id/:title/:description/:completed"
              element={<EditCard />}
            ></Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
