import { Form, Formik } from "formik";
import { useCourses } from "../context/CourseProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CourseForm() {
  const { createCourse, getCourse, updateCourse } = useCourses();
  const [course, setCourse] = useState({
    course_title: "",
    course_description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCourse = async () => {
      if (params.code) {
        const course = await getCourse(params.code);
        setCourse({
          course_title: course.course_title,
          course_description: course.course_description,
        });
      }
    };
    loadCourse();
  }, [params.code, getCourse]);

  return (
    <div className="mx-auto">
      <Formik
        initialValues={course}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.code) {
            // Aquí manejas la edición de un curso existente
            await updateCourse(params.code, values);
          } else {
            // Aquí manejas la creación de un nuevo curso
            const newCourse = await createCourse(values);
            if (newCourse && newCourse.code) {
              navigate(`/course/${newCourse.code}`);
            } else {
              console.error("Error al crear el curso"); // Manejo de errores
            }
          }
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-Frost text-Black max-w-md rounded-md p-5 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold text-Ice ">
              {params.code ? "Edit Course" : "New Course"}
            </h1>
            <label className="block mt-2 text-2xl font-bold text-Abysm">
              Title
            </label>
            <input
              type="text"
              name="course_title"
              placeholder="Write a title"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.course_title}
            />

            <label className="block mt-2 text-2xl font-bold text-Abysm">
              Description
            </label>
            <textarea
              name="course_description"
              rows="3"
              placeholder="Write a description"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.course_description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-Ice text-Melancholia font-bold px-2 py-1 w-full rounded-md"
            >
              {isSubmitting ? "Saving . . ." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

/*export default function CourseForm() {
  const { createCourse, getCourse, updateCourse } = useCourses();
  const [course, setCourse] = useState({
    course_title: "",
    course_description: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadCourse = async () => {
      if (params.code) {
        const course = await getCourse(params.code);
        setCourse({
          course_title: course.course_title,
          course_description: course.course_description,
        });
      }
    };
    loadCourse();
  }, []);

  return (
    <div className="mx-auto">
      <Formik
        initialValues={course}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.code) {
            await updateCourse(params.code, values);
          } else {
            await createCourse(values);
          }
          navigate("/");
          setCourse({
            course_title: "",
            course_description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-Frost text-Black max-w-md rounded-md p-5 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold text-Ice ">
              {params.code ? "Edit Course" : "New Course"}
            </h1>
            <label className="block mt-2 text-2xl font-bold text-Abysm">
              Title
            </label>
            <input
              type="text"
              name="course_title"
              placeholder="Write a title"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.course_title}
            />

            <label className="block mt-2 text-2xl font-bold text-Abysm">
              Description
            </label>
            <textarea
              name="course_description"
              rows="3"
              placeholder="Write a description"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.course_description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-Ice text-Melancholia font-bold px-2 py-1 w-full rounded-md"
            >
              {isSubmitting ? "Saving . . ." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}*/
