import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css';

const UsersList = ({ users }) => {
  const allUsers = users.length > 0 ? (
    users.map((user) => <li key={user.id}>{user.name} ({user.age} Years old)</li>)
  ) : (
    <p>No users found</p>
  );
  return (
    <Card className={classes.users}>
      <ul>
        {allUsers}
      </ul>
    </Card>
  );
};

export default UsersList;
