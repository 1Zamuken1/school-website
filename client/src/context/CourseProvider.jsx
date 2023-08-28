import { createContext, useContext, useState } from "react";
import {
  getCoursesRequest,
  deleteCourseRequest,
  createCourseRequest,
  /*getCourseRequest,
  updateCourseRequest,
  toggleCourseDoneRequest,*/
} from "../api/course.api";
import { CourseContext } from "./CourseContex";

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error(
      "UseCourses requires Context to be defined in your application configuration file."
    );
  }
  return context;
};

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  async function loadCourses() {
    const response = await getCoursesRequest();
    setCourses(response.data);
  }

  const deleteCourse = async (code) => {
    try {
      const response = await deleteCourseRequest(code);
      setCourses(courses.filter((course) => course.code !== code));
    } catch (error) {
      console.error(error);
    }
  };

  const createCourse = async (course) => {
    try {
      const response = await createCourseRequest(course);
      setCourses([...courses, response.data]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CourseContext.Provider
      value={{ courses, loadCourses, deleteCourse, createCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};
