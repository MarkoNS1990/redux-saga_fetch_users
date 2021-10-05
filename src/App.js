import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchUsersBegin,
  addUser,
  deleteRequest,
  updateUser,
} from "./redux/users/usersActions";
import User from "./components/User";

function App() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onDeleteUser = (user) => {
    dispatch(deleteRequest(user));
  };

  const onAddUser = () => {
    const newUser = { id: Date.now(), name: name };
    dispatch(addUser(newUser));
  };

  useEffect(() => {
    dispatch(fetchUsersBegin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {users &&
        users.map((user) => (
          <User user={user} onDeleteUser={onDeleteUser} key={user.id} />
        ))}
      <input
        className="mt-2 form-control w-50 m-auto
        "
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button className="btn btn-primary mt-2" onClick={onAddUser}>
        Add user
      </button>
    </div>
  );
}

export default App;
