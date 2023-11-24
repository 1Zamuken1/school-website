import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import CoursesPage from "../Pages/CoursesPage";
import CourseForm from "../Pages/CourseForm";
import AdvertisementForm from "../Pages/AdvertisementForm";
import CourseDetail from "./CourseDetail";
import { CourseContextProvider } from "../context/CourseProvider";
import { AdvertisementContextProvider } from "../context/AdvertisementProvider";
import NotFound from "../pages/NotFound";

export default function TeacherView() {
  return (
    <div className=" bg-Abysm text-White max-h-full">
      <Navbar />
      <div className="container mx-auto py-4 px-10">
        <CourseContextProvider>
        <AdvertisementContextProvider>
          <Routes>
            <Route path="/" element={<CoursesPage />} />
            
            <Route path="/new-course" element={<CourseForm />} />
            <Route path="/edit-course/:code" element={<CourseForm />} />
            <Route path="/course/:code" element={<CourseDetail/>} />
            
            <Route path="/new-advertisement" element={< AdvertisementForm />} />
            <Route path="/edit-advertisement/:code" element={<AdvertisementForm />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </AdvertisementContextProvider>
        </CourseContextProvider>
      </div>
    </div>
  );
}
