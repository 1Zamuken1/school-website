import { useEffect, useState } from "react";
import { getCoursesRequest } from "../api/course.api";
import CourseCard from "../components/CourseCard";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const response = await getCoursesRequest();
      setCourses(response.data);
    }
    loadCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <CourseCard course={course} key={course.code} />
      ))}
    </div>
  );
}
