import { Form, Formik } from "formik";
import { createCourseRequest } from "../api/course.api";

export default function CourseForm() {
  return (
    <div>
      <Formik
        initialValues={{
          course_title: "",
          course_description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createCourseRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
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
                {isSubmitting ? "Saving . . .": "Save"}
              </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
