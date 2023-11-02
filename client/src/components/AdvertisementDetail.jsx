import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function AdvertisementDetail() {
  const { code } = useParams();
  const [advertisement, setAdvertisement] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/advertisements/${code}`)
      .then((response) => {
        setAdvertisement(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener detalles del anuncio:", error);
      });
  }, [code]);

  if (!advertisement) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
        <br></br>
        <h1>{advertisement.advertisement_title}</h1>
        <p>{advertisement.advertisement_description}</p>
      </div>
    </div>
  );
}
