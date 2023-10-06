import React, { useState } from "react";
import "./index.css";

/* Logins */
import AdminView from "./components/AdminView";
import TeacherView from "./components/TeacherView";
import StudentView from "./components/StudentView";
import Login from "./Screens/Login";
import firebaseApp from "./Credentials/credentials.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export default function App() {
  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestore, `users/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function setUserRol(firebaseUser) {
    getRol(firebaseUser.uid).then((rol) => {
      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        rol: rol,
      };
      setUser(userData);
      console.log("user Data final", userData);
    });
  }

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      if (!user) {
        setUserRol(firebaseUser);
      }
    } else {
      setUser(null);
    }
  });

  if (!user) {
    return <Login />;
  } else if (user.rol === "admin") {
    return <AdminView />;
  } else if (user.rol === "teacher") {
    return <TeacherView />;
  } else if (user.rol === "student") {
    return <StudentView />;
  }
}
