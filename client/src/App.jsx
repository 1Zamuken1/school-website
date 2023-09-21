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
import {getAuth, onAuthStateChanged} from "firebase/auth";

const auth = getAuth(firebaseApp);

export default function App(){
const [user, setUser] = useState(null);
onAuthStateChanged(auth, (firebaseUser) => {
  if(firebaseUser){
    setUser(firebaseUser);
  } else {
    setUser(null);
  }
});
return(
  <>{user ? <Navbar /> : <Login/>}</>
)
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
