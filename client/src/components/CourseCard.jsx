import { VscFolderOpened, VscFolderActive } from "react-icons/vsc";

export default function CourseCard({ course }) {
  return (
    <div>
      <h2>{course.course_title}</h2>
      <p>{course.course_description}</p>
      <span>
        {course.done == 1 ? <VscFolderActive /> : <VscFolderOpened />}
      </span>
      <span>{course.createAt}</span>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}
