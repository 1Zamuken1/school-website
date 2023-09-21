import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "./Pages/CoursesPage";
import CourseForm from "./Pages/CourseForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { CourseContextProvider } from "./context/CourseProvider";
import "./index.css";

/* Logins */
import Home from "./Screens/Home";
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
    const infoFinal = docuCifrada.data().role;
    return infoFinal;
  }

  function setUserRole(firebaseUser) {
    getRol(firebaseUser.uid).then((role) => {
      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        role: role,
      };
      setUser(userData);
      console.log("user Data final", userData);
    });
  }

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      if (!user) {
        setUserRole(firebaseUser);
      }
    } else {
      setUser(null);
    }
  });
  return <>{user ? <Home user={user} /> : <Login />}</>;
}

/*export default function App() {
  return (
    <div className=" bg-Abysm text-White h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-10">
                <CourseContextProvider>
                  <Routes>
                    <Route path="/" element={<CoursesPage />} />
                    <Route path="/new-course" element={<CourseForm />} />
                    <Route path="/edit-course/:code" element={<CourseForm />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </CourseContextProvider>
              </div>
            </div>
  );
}*/
