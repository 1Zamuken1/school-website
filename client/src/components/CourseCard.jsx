import { VscFolderOpened, VscFolderActive } from "react-icons/vsc";
import { deleteCourseRequest } from "../api/course.api";
export default function CourseCard({ course }) {
  const handlDelete = async (code) => {
    try {
      const response = await deleteCourseRequest(code);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{course.course_title}</h2>
      <p>{course.course_description}</p>
      <span>
        {course.done == 1 ? <VscFolderActive /> : <VscFolderOpened />}
      </span>
      <span>{course.createAt}</span>
      <button onClick={() => handlDelete(course.code)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}
