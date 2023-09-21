import React from "react";
import AdminView from "../components/AdminView";
import TeacherView from "../components/TeacherView";
import StudentView from "../components/StudentView";

export default function Home(user) {
  return (
    <div>
      Home
      <button onClick={() => signOut(auth)}>Log Out</button>
      {user.role === "teacher" ? <TeacherView /> : <StudentView />}
    </div>
  );
}
