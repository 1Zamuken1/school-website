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
  }, []);

  return (
    <div>
      <h1>{params.code ? "Edit Course" : "New Course"}</h1>

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
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type='text'
              name='course_title'
              placeholder='Write a title'
              onChange={handleChange}
              value={values.course_title}
            />

            <label>Description</label>
            <textarea
              name='course_description'
              rows='3'
              placeholder='Write a description'
              onChange={handleChange}
              value={values.course_description}
            ></textarea>
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Saving . . ." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
