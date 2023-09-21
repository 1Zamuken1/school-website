import React, { useState } from "react";
import firebaseApp from "../Credentials/credentials";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);

export default function Login() {
  const firestore = getFirestore(firebaseApp);
  const [isRegistering, setIsRegistering] = useState(false);
  async function userRegister(email, password, role) {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((firebaseUser) => {
      return firebaseUser;
    });
    console.log(infoUser.user.uid);
    const docuRef = doc(firestore, `users/${infoUser.user.uid}`);
    setDoc(docuRef, { email: email, role: role });
  }
  function submitHandler(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const role = event.target.elements.role.value;
    console.log("submit", email, password, role);

    if (isRegistering) {
      userRegister(email, password, role);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }
  return (
    <div>
      <h1>{isRegistering ? "Regístrate" : "Inicia sesión"}</h1>

      <form onSubmit={submitHandler}>
        <label>
          Email:
          <input type="email" id="email" />
        </label>

        <label>
          Password:
          <input type="password" id="password" />
        </label>

        <label>
          Role:
          <select id="role">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </label>

        <input
          type="submit"
          value={isRegistering ? "Registrar" : "Iniciar sesión"}
        />

        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Ya tengo una cuenta" : "Quiero registrarme"}
        </button>
      </form>
    </div>
  );
}
