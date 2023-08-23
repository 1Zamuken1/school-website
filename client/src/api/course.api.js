import axios from "axios";

export const createCourseRequest = async (course) =>
  await axios.post("http://localhost:4000/courses", course);
