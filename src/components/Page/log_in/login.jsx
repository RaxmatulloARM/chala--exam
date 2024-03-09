import React from "react";
import { Link } from "react-router-dom";
import useToken from "../Hooks/useToken";
document.title = "Users"

function Api() {
  const [users, setUsers] = React.useState([]);
  const [Loading, setLoading] = React.useState(true);

  const [setToken] = useToken(true)

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();

      if (data?.data) {
        setUsers(data?.data);
        setLoading(false)
      }
    })();
  }, []);


  return (

    <div className="Api">

      <ul className="item">
        {users?.length > 0 &&
          users.map((user) => (
            <Link key={user.id} to={'/profile/' + user.id}>
              <li key={user.id}>
                <img
                  src={user.avatar}
                  alt={user.first_name + " " + user.last_name + "s avatar"}
                />
                <h2>{user.first_name + " " + user.last_name}</h2>
              </li>
            </Link>
          ))}
      </ul>

      <button className="btn" onClick={() => setToken(false)}>Login Out</button>

      {Loading && <h1>Loading...</h1>}
    </div>
  );
}

export default Api;