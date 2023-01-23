import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Error404 from './components/Error404';
import Home from './components/Home';
import User from './components/User';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/*" element={<Users />}>
              <Route path="user/:id" element={<User />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
