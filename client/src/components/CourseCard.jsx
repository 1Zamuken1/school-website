import { IoReorderThreeOutline } from "react-icons/io5";
import { useCourses } from "../context/CourseProvider";
import { useNavigate } from "react-router-dom";
import CourseDetail from "./CourseDetail";
import { Link } from "react-router-dom";

/*export default function CourseCard({ course }) {
  const { deleteCourse } = useCourses(course);
  const navigate = useNavigate();

  // Función para navegar al curso creado
  const navigateToCreatedCourse = () => {
    // Asume que la URL para acceder a un curso individual es "/course/:code"
    // Donde ":code" es el identificador único del curso
    navigate(`/course/${course.code}`);
  };

  return (
    <div className='bg-Meteor rounded-md p-4'>
      <header className='flex justify-between'>
        <h2 className='text-xl font-bold'>{course.course_title}</h2>
        <button onClick={navigateToCreatedCourse}>
          <IoReorderThreeOutline className='text-3xl text-White ' />
        </button>
      </header>
      <p className='text-xs'>{course.course_description}</p>
      <span>{course.createAt}</span>
      <div className='flex gap-x-2'>
        <button
          className='bg-Romance px-2 py-1'
          onClick={() => deleteCourse(course.code)}
        >
          Delete
        </button>
        <button
          className='bg-Aquarius px-2 py-1'
          onClick={() => navigate(`/edit-course/${course.code}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}*/

export default function CourseCard({ course }) {
  const { deleteCourse } = useCourses(course);
  const Navigate = useNavigate();
  return (
    <div className="bg-Meteor rounded-md p-4">
      <header className=" flex justify-between">
        <Link to={`/course/${course.code}`} className="text-xl font-bold">
          {course.course_title}
        </Link>
        <button onClick={() => Navigate(`/new-course/`)}>
          <IoReorderThreeOutline className="text-3xl text-White " />
        </button>
      </header>
      <p className="text-xs">{course.course_description}</p>
      <span>{course.createAt}</span>
      <div className="flex gap-x-2">
        <button
          className="bg-Romance px-2 py-1"
          onClick={() => deleteCourse(course.code)}
        >
          Delete
        </button>
        <button
          className="bg-Aquarius px-2 py-1"
          onClick={() => Navigate(`/edit-course/${course.code}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
