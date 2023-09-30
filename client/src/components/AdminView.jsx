import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import firebaseApp from "../Credentials/credentials";

const auth = getAuth(firebaseApp);
export default function AdminView() {
  return (
    <div>Hola Admin
      <button onClick={() => signOut(auth)}>Log Out</button>
    </div>
  )
}
