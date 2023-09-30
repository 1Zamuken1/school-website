import React from "react";
import firebaseApp from "../Credentials/credentials";
import { getAuth, signOut } from "firebase/auth";
import TeacherView from "../components/TeacherView";
import StudentView from "../components/StudentView";
import "../index.css";

const auth = getAuth(firebaseApp);
export default function Home(user) {
  return(
    <div>
      Home
      <button onClick={() => signOut(auth)}>Log Out</button>
      {user.rol === "teacher" ? < TeacherView/> : < StudentView />}
    </div>
  )

}

  /*<div>
      Home
      <button onClick={() => signOut(auth)}>Log Out</button>
      {user.rol === "teacher" ? < TeacherView/> : < StudentView />}
    </div>*/

/*   if(user.rol === "teacher"){
    return(<StudentView />)
  } else{
    return(<TeacherView />)
  } */