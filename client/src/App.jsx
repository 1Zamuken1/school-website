import { Routes, Route } from "react-router-dom"
import CoursesPage from "./pages/CoursesPage"
import CourseForm from "./pages/CourseForm"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CoursesPage/>} />
      <Route path="/new-course" element={<CourseForm/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}
