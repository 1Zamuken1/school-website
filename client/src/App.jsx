import { Routes, Route } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import CourseForm from "./pages/CourseForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { CourseContextProvider } from "./context/CourseProvider";

export default function App() {
  return (
    <CourseContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<CoursesPage />} />
        <Route path='/new-course' element={<CourseForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CourseContextProvider>
  );
}
