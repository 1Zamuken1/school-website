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
      <h1 className='text-5xl text-Esmerald font-bold text-center'>Courses</h1>
      <div className='grid grid-cols-4 gap-4 py-7'>{renderMain()}</div>
    </div>
  );
}

export default CoursesPage;
