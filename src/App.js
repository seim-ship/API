import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./UserList";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="App">
      {data.map((user) => (
        <UserList
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          address={user.address}
          street={user.street}
          suite={user.suite}
          city={user.city}
          zipcode={user.zipcode}
          geo={user.geo}
          phone={user.phone}
          website={user.website}
          company={user.company}
          catchPhrase={user.name}
          bs={user.name}
        />
      ))}
      ;
    </div>
  );
}

export default App;
