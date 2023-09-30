import React, { useState } from "react";
import firebaseApp from "../Credentials/credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import "../index.css";

const auth = getAuth(firebaseApp);

export default function Login() {
  const firestore = getFirestore(firebaseApp);
  const [isRegistering, setIsRegistering] = useState(false);
  async function userRegister(email, password, rol) {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      rol
    ).then((firebaseUser) => {
      return firebaseUser;
    });
    console.log(infoUser.user.uid);
    const docuRef = doc(firestore, `users/${infoUser.user.uid}`);
    setDoc(docuRef, { email: email, rol: rol });
  }
  function submitHandler(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const rol = event.target.elements.rol.value;
    console.log("submit", email, password, rol);

    if (isRegistering) {
      userRegister(email, password, rol);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }
  return (
    <div className="h-screen bg-Meteor text-White">
      <h1 className="block text-4xl font-bold text-center ">
        {isRegistering ? "Regístrate" : "Inicia sesión"}
      </h1>

      <form
        onSubmit={submitHandler}
        className="
        container
        mt-5 
        mx-auto 
        justify-center 
        py-10
        p-5 
        gap-2 
        bg-Abysm 
        rounded-md
        content-center
        max-w-sm"
      >
        <label className="text-xl font-bold">
          <span className="text-center">Email:</span>
          <input type="email" id="email" className="block text-Black px-2 py-1 rounded-sm w-full" />
        </label>
 
        <label className="text-xl font-bold block mt-4">
          Password:
          <input type="password" id="password" className="block text-Black px-2 py-1 rounded-sm w-full" />
        </label>

        <label className="text-xl font-bold block mt-4">
          Rol:
          <select id="rol" className="block text-Black px-2 py-1 rounded-sm w-full">
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
