import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false))
  }, [id]);
  return (
    <div>
      <h1>User Detail</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <code>{JSON.stringify(user)}</code>}
      <br />
      <br />
      {parseInt(id) < 10 ? (
        <Link to={`/users/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
      ) : (
        <Link to={`/users/user/${1}`}>Turn Head</Link>
      )}
      <br />
      <br />
      <Link to={`/users/user/${parseInt(id) - 1}`}>Go Back</Link>
    </div>
  )
}

export default User