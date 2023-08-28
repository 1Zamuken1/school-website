import { createContext, useContext, useState } from "react";
import {
  getCoursesRequest,
  deleteCourseRequest,
  createCourseRequest,
  getCourseRequest,
  updateCourseRequest,
  /*toggleCourseDoneRequest,*/
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

  // function load
  async function loadCourses() {
    const response = await getCoursesRequest();
    setCourses(response.data);
  }

  // function delete
  const deleteCourse = async (code) => {
    try {
      const response = await deleteCourseRequest(code);
      setCourses(courses.filter((course) => course.code !== code));
    } catch (error) {
      console.error(error);
    }
  };

  // function create
  const createCourse = async (course) => {
    try {
      const response = await createCourseRequest(course);
      /*setCourses([...courses, response.data]);*/
    } catch (error) {
      console.log(error);
    }
  };

  // function get Course
  const getCourse = async (code) => {
    try {
      const response = await getCourseRequest(code);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // function update
  const updateCourse = async (code, newFields) => {
    try {
      const response = await updateCourseRequest(code, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CourseContext.Provider
      value={{ courses, loadCourses, deleteCourse, createCourse, getCourse, updateCourse}}
    >
      {children}
    </CourseContext.Provider>
  );
};
