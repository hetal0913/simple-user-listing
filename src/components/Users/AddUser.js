import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(name, age);
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age (non-empty values)"
      })
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age (> 0 "
      })
      return;
    }

    setAge("");
    setName("");
    const userData = { name, age };
    props.onAddUser(userData);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
