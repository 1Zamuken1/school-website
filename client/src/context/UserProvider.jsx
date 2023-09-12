import { createContext, useContext, useState } from "react";
import {
  getUsersRequest,
  deleteUsersRequest,
  createUsersRequest,
  getUserRequest,
  updateUsersRequest,
} from "../api/users.api";
import {UserContext} from "./UserContext";

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUsers requires a context"
    );
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  //load
  async function loadUsers() {
    const response = await getUsersRequest();
    setUsers(response.data);
  }

  //delete
  const deleteUsers = async (user_id) => {
    try {
      const response = await deleteUsersRequest(user_id);
      setUsers(users.filter((user) => user.user_id !== user_id));
    } catch (error) {
      console.error(error);
    }
  };

  //create
  const createUsers = async (user) => {
    try {
      const response = await createUsersRequest(user);
    } catch (error) {
      console.log(error);
    }
  };

  //get User
  const getUser = async (user) => {
    try {
      const response = await getUserRequest(user_id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  //update
  const updateUser = async (user_id, newFields) => {
    try {
      const response = await updateUsersRequest(user_id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loadUsers,
        deleteUsers,
        createUsers,
        getUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
