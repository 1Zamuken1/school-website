import { VscFolderOpened, VscFolderActive } from "react-icons/vsc";
import { useCourses } from "../context/CourseProvider";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const { deleteCourse, toggleCourseDone } = useCourses(course);
  const Navigate = useNavigate();
  const handleDone = async () => {
    await toggleCourseDone(course.code);
  };
  return (
    <div course={course} key={course}>
      <header>
        <h2>{course.course_title}</h2>

        <span>
          {course.done == 1 ? <VscFolderActive /> : <VscFolderOpened />}
        </span>
      </header>

      <p>{course.course_description}</p>
      <span>{course.createAt}</span>

      <div>
        <button onClick={() => deleteCourse(course.code)}>Delete</button>
        <button onClick={() => Navigate(`/edit-course/${course.code}`)}>
          Edit
        </button>
      </div>
    </div>
  );
}
