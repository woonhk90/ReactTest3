import React, { useState } from "react";
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState();

  const onAddUserHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userInfo.name.trim().length === 0 || userInfo.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userInfo.age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(userInfo);

    setUserInfo({
      name: "",
      age: "",
    });
  };
  const onErrorHandler = () => {
    setError(undefined);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onClick={onErrorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label>Username</label>
          <input
            className={classes.input}
            type="text"
            name="name"
            id="name"
            value={userInfo.name}
            onChange={onAddUserHandler}
          />
          <label>Age (Years)</label>
          <input
            className={classes.input}
            type="number"
            name="age"
            id="age"
            value={userInfo.age}
            onChange={onAddUserHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
