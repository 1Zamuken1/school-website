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

  function renderMain() {
    if (courses.length === 0) return <h1>No Courses Yet</h1>;
    return courses.map((course) => (
      <CourseCard course={course} key={course.code} />
    ));
  }

  return (
    <div>
      <h1>Courses</h1>
      {renderMain()}
    </div>
  );
}
