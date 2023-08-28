import { Form, Formik } from "formik";
import { useCourses } from "../context/CourseProvider";

export default function CourseForm() {
  const { createCourse } = useCourses();

  return (
    <div>
      <Formik
        initialValues={{
          course_title: "",
          course_description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createCourse(values);
          actions.resetForm();
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
