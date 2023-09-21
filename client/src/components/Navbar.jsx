import { Link } from "react-router-dom";
import "../index.css";
import firebaseApp from "../Credentials/credentials";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default function Navbar() {
  return (
    <div className='bg-Koopa flex justify-between px-20 py-4'>
      <Link to={"/"} className='text-Warm text-2xl font-bold'>
        <h1>Aprendiendo</h1>
      </Link>

      <ul className='flex gap-x-2'>
        <li>
          <Link to='/' className='bg-Melancholia px-2 py-1'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/new-course' className='bg-Harmony text-Warm px-2 py-1'>
            Create Course
          </Link>
        </li>
        <li>
          <button onClick={() => signOut(auth)}>Log Out</button>
        </li>
      </ul>
    </div>
  );
}
