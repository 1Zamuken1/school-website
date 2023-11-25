/*import { useEffect, useState } from "react";
import { getAdvertisementsRequest } from "../api/advertisements.api";
import { useParams } from "react-router-dom";

export default function AdvertisementPage() {
  const [advertisements, setAdvertisements] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function loadAdvertisements() {
      const response = await getAdvertisementsRequest({ courseCode: params.code });
      setAdvertisements(response.data);
    }
    loadAdvertisements();
  }, [params.code]);

  return (
    <div className="flex-col ml-40 mr-20 pl-40 pr-40 block text-center mb-5 justify-center">
      <div className="space-y-5">
        {advertisements.map((advertisement) => (
          <div className=" bg-White rounded-md" key={advertisement.code}>
            <h2 className=" bg-Ice rounded-md text-3xl text-White">
              {advertisement.advertisement_title}
            </h2>
            <p className="text-Black">{advertisement.advertisement_description}</p>
            <br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
        ))}
      </div>
    </div>
  );
}*/
import React, { useEffect, useState } from "react";
import { useAdvertisements } from "../context/AdvertisementProvider";
import { useParams } from "react-router-dom";

export default function AdvertisementPage() {
  const [advertisements, setAdvertisements] = useState([]);
  const { loadAdvertisementsByCourse } = useAdvertisements();
  const { code } = useParams(); // Asegúrate de importar 'useParams' de react-router-dom

  useEffect(() => {
    // Cargar anuncios específicos para el curso al montar el componente
    if (code) {
      loadAdvertisementsByCourse(code);
    }
  }, [code]);

  return (
    <div className="flex-col ml-40 mr-20 pl-40 pr-40 block text-center mb-5 justify-center">
      <div className="space-y-5">
        {advertisements.map((advertisement) => (
          <div className="bg-White rounded-md" key={advertisement.code}>
            <h2 className="bg-Ice rounded-md text-3xl text-White">
              {advertisement.advertisement_title}
            </h2>
            <p className="text-Black">{advertisement.advertisement_description}</p>
            <br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
        ))}
      </div>
    </div>
  );
}
