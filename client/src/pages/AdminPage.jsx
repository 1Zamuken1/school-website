import { useEffect } from "react";
import UserCard from "../components/UserCard";
import { useUsers } from "../context/UserProvider";

export default function AdminPage() {
  const {users, loadUsers} = useUsers();
  useEffect(() => {
    loadUsers();
  }, []);

  function renderMain(){
    if (users.length === 0) return <h1>No users yet</h1>;
    return users.map((user) =>(
        <UserCard user={user} key={user.user_id} />
    ))
  }

  return(
    <div>
        <h1>Users</h1>
        <div>{renderMain()}</div>
    </div>
  )
}
