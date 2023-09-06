import axios from "axios";

export const getUsersRequest = async () =>
  await axios.get("http://localhost:4000/users");

export const createUsersRequest = async (user) =>
  await axios.post("http://localhost:4000/users", user);

export const deleteUsersRequest = async (user_id) =>
  await axios.delete(`http://localhost:4000/users/${user_id}`);

export const getUserRequest = async (user_id) =>
  await axios.get(`http://localhost:4000/users/${user_id}`);

export const updateUsersRequest = async (user_id, newFields) =>
  await axios.put(`http://localhost:4000/users/${user_id}`, newFields);

export const toggleUsersDoneRequest = async (user_id, done) =>
  await axios.put(`http://localhost:4000/users/${user_id}`, {
    done,
  });
