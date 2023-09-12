import axios from "axios";

export const getCoursesRequest = async () =>
  await axios.get("http://localhost:4000/courses");

export const createCourseRequest = async (course) =>
  await axios.post("http://localhost:4000/courses", course);

export const deleteCourseRequest = async (code) =>
  await axios.delete(`http://localhost:4000/courses/${code}`);

export const getCourseRequest = async (code) =>
  await axios.get(`http://localhost:4000/courses/${code}`);

export const updateCourseRequest = async (code, newFields) =>
  await axios.put(`http://localhost:4000/courses/${code}`, newFields);

/*export const toggleCourseDoneRequest = async (code, done) =>
  await axios.put(`http://localhost:4000/courses/${code}`, {
    done,
  });*/
