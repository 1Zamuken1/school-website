/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import AdvertisementPage from "../Pages/AdvertisementPage";

function CourseDetail() {
  const { code } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Realizamos una solicitud al servidor backend para obtener detalles del curso por su código
    axios
      .get(`http://localhost:4000/courses/${code}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener detalles del curso:", error);
      });
  }, [code]);

  if (!course) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className="bg-Meteor rounded-md py-4 px-4 container">
        <br></br>
        <h1 className="text-5xl text-White text-center">
          {course.course_title}
        </h1>
        <p className="text-3xl text-White text-left mt-10">
          {course.course_description}
        </p>
        {/* Otros detalles del curso */ /*}
      </div>

      <div className="container align text-left">
        <button className="mt-5 bg-Broad rounded-md text-Abysm px-5 py-5">
          <Link to="/new-advertisement">Create Advertisement</Link>
        </button>
      </div>

      <div>
        <AdvertisementPage />
      </div>
    </div>
  );
}

export default CourseDetail;*/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import AdvertisementPage from "../Pages/AdvertisementPage";
import { useAdvertisements } from "../context/AdvertisementProvider"; // Asegúrate de importar useAdvertisements

function CourseDetail() {
  const { code } = useParams();
  const [course, setCourse] = useState(null);
  const { loadAdvertisementsByCourse } = useAdvertisements(); // Importa useAdvertisements

  useEffect(() => {
    // Realizamos una solicitud al servidor backend para obtener detalles del curso por su código
    axios
      .get(`http://localhost:4000/courses/${code}`)
      .then((response) => {
        setCourse(response.data);

        // Cargar anuncios específicos para el curso
        if (response.data) {
          loadAdvertisementsByCourse(response.data.code);
        }
      })
      .catch((error) => {
        console.error("Error al obtener detalles del curso:", error);
      });
  }, [code]);

  if (!course) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className="bg-Meteor rounded-md py-4 px-4 container">
        <br></br>
        <h1 className="text-5xl text-White text-center">
          {course.course_title}
        </h1>
        <p className="text-3xl text-White text-left mt-10">
          {course.course_description}
        </p>
        {/* Otros detalles del curso */}
      </div>

      <div className="container align text-left">
        <button className="mt-5 bg-Broad rounded-md text-Abysm px-5 py-5">
          <Link to="/new-advertisement">Create Advertisement</Link>
        </button>
      </div>

      <div>
        <AdvertisementPage />
      </div>
    </div>
  );
}

export default CourseDetail;
