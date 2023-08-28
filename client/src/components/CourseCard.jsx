import { VscFolderOpened, VscFolderActive } from "react-icons/vsc";
import { useCourses } from "../context/CourseProvider";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const { deleteCourse } = useCourses(course);
  const navigate = useNavigate()
  return (
    <div course={course} key={course.code}>
      <h2>{course.course_title}</h2>
      <p>{course.course_description}</p>
      <span>
        {course.done == 1 ? <VscFolderActive /> : <VscFolderOpened />}
      </span>
      <span>{course.createAt}</span>
      <button onClick={() => deleteCourse(course.code)}>Delete</button>
      <button onClick={() => navigate(`/edit-course/${course.code}`)}>Edit</button>
    </div>
  );
}
