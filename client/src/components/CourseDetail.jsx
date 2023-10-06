import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CourseDetail() {
  const { code } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Realizamos una solicitud al servidor backend para obtener detalles del curso por su código
    axios.get(`http://localhost:4000/courses/${code}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener detalles del curso:', error);
      });
  }, [code]);

  if (!course) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{course.course_title}</h1>
      <p>{course.course_description}</p>
      {/* Otros detalles del curso */}
    </div>
  );
}

export default CourseDetail;
