import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (v) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: v.name, age: v.age },
      ];
    });
  };
  console.log("APP_usersList", usersList);
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserList usersList={usersList} />
    </div>
  );
}

export default App;
