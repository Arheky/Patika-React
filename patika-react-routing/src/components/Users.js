import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import '../App.css';

function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .finally(() => setIsLoading(false
        ))
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <NavLink activeClassName="active" to={`user/${user.id}`}>{user.name}</NavLink>
            </li>
          ))
        }
      </ul>
      <Outlet />
    </div>
  )
}

export default Users