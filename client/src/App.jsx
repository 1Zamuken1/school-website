import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login"
import CoursesPage from "./Pages/CoursesPage";
import CourseForm from "./pages/CourseForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { CourseContextProvider } from "./context/CourseProvider";
import "./index.css";

export default function App() {
  return (
    <div className=' bg-Abysm text-White h-screen'>
      <Navbar />
      <div className='container mx-auto py-4 px-10'>
        <CourseContextProvider>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<CoursesPage />} />
            <Route path='/new-course' element={<CourseForm />} />
            <Route path='/edit-course/:code' element={<CourseForm />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CourseContextProvider>
      </div>
    </div>
  );
}
