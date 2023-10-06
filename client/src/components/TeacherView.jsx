import React from "react";
import { Routes, Route } from "react-router-dom";
import CoursesPage from "../Pages/CoursesPage";
import CourseForm from "../Pages/CourseForm";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import CourseDetail from "./CourseDetail";
import { CourseContextProvider } from "../context/CourseProvider";

export default function TeacherView() {
  return (
    <div className=" bg-Abysm text-White max-h-full">
      <Navbar />
      <div className="container mx-auto py-4 px-10">
        <CourseContextProvider>
          <Routes>
            <Route path="/" element={<CoursesPage />} />
            <Route path="/new-course" element={<CourseForm />} />
            <Route path="/edit-course/:code" element={<CourseForm />} />
            <Route path="/course/:code" element={<CourseDetail/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CourseContextProvider>
      </div>
    </div>
  );
}
