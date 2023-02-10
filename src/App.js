import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userData) => {
    const id = Math.random().toString();
    setUsersList((prevData) => {
      return [...prevData, {id: id, name: userData.name, age: userData.age}]
    });
    console.log(usersList);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
