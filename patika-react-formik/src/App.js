import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import First from "./components/pages/firstExample";
import Second from "./components/pages/secondExample";
import Useformik from "./components/pages/useFormik";
import Validation from "./components/pages/Validation";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <li>
            <NavLink activeClassName="active" to="/">First Example</NavLink>
          </li>
          <li>
            <NavLink to="/secondExample">Second Example</NavLink>
          </li>
          <li>
            <NavLink to="/useFormikExample">useFormik Example</NavLink>
          </li>
          <li>
            <NavLink to="/validationExample">Validation Example</NavLink>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/secondExample" element={<Second />} />
          <Route path="/useFormikExample" element={<Useformik />} />
          <Route path="/validationExample" element={<Validation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;