import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact path="/"
          Component={() => ( <Textform title="Try TextUtils - word counter, character counter, remove extra spaces" />)} />
        <Route exact path="/about" Component={() => <About />} />
      </Routes>
    </Router>
  );
}
{
  /* <Textform title="Try TextUtils - word counter, character counter, remove extra spaces" /> */
}

export default App;
