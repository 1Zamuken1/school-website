import { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import { useCourses } from "../context/CourseProvider";

function CoursesPage() {
  const { courses, loadCourses } = useCourses();
  useEffect(() => {
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

export default CoursesPage;
