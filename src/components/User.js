import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/users/usersActions";

const User = ({ onDeleteUser, user }) => {
  const [edit, setEdit] = useState("");
  const dispatch = useDispatch();
  const onUpdateUser = (user) => {
    console.log("id: ", user.id);
    const updatedUser = { ...user, name: edit };

    dispatch(updateUser(updatedUser));
    setEdit("");
  };
  return (
    <div>
      <p onClick={() => onDeleteUser(user)}>{user.name}</p>
      <input
        value={edit}
        type="text"
        placeholder="edit me..."
        onChange={(e) => {
          setEdit(e.target.value);
        }}
      />
      <button onClick={() => onUpdateUser(user)}>save</button>
    </div>
  );
};

export default User;
