import { useEffect, useState } from "react";
import { getAdvertisementsRequest } from "../api/advertisements.api";

export default function AdvertisementPage() {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    async function loadAdvertisements() {
      const response = await getAdvertisementsRequest();
      setAdvertisements(response.data);
    }
    loadAdvertisements();
  }, []);

  return (
    <div className="flex-col ml-40 mr-20 pl-40 pr-40 block text-center mb-5 justify-center">
      <div className="space-y-5">
        {advertisements.map((advertisements) => (
          <div className=" bg-White rounded-md">
            <h2 className=" bg-Ice rounded-md text-3xl text-White">
              {advertisements.advertisement_title}
            </h2>
            <p className="text-Black">{advertisements.advertisement_description}</p>
            <br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
        ))}
      </div>
    </div>
  );
}
