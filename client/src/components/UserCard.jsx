import { useUsers } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user }) {
  const { deleteUser } = useUsers(user);
  const Navigate = useNavigate();
  return (
    <div>
      <header>
        <h2>{user.user_name}</h2>
        <button onClick={() => Navigate(`/new-user`)}></button>
      </header>
      <p>{user.user_email}</p>
      <span>{user.createAt}</span>
      <div>
        <button onClick={() => deleteUser(user.user_id)}>Delete</button>
        <button onClick={() => Navigate(`/edit-user/${user.user_id}`)}>
          Edit
        </button>
      </div>
    </div>
  );
}
