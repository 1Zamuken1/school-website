/*import { useEffect } from "react";
import AdvertisementCard from "../components/AdvertisementCard/AdvertisementCard";
import {useAdvertisements} from "../context/AdvertisementProvider/AdvertisementProvider";

export function AdvertisementPage() {
    const {advertisements, loadAdvertisements} = useAdvertisements();
    useEffect(() => {
        loadAdvertisements();
    }, []);

    function renderMain() {
        if (advertisements.length === 0) return <h1>No Advertisements Yet</h1>;
        return advertisements.map((advertisement) => (
            <AdvertisementCard advertisement={advertisement} key={advertisement.code} />
        ));
    }

    return(
        <div>
            <h1>Advertisements</h1>
            <div>{renderMain()}</div>
        </div>
    );
}*/

import { useEffect, useState } from "react";
import { getAdvertisementsRequest } from "../api/advertisements.api";

export default function AdvertisementPage() {

    const [advertisements, setAdvertisements] = useState([])

    useEffect(() => {
        async function loadAdvertisements(){
           const response = await getAdvertisementsRequest();
           setAdvertisements(response.data)
        }
        loadAdvertisements();
    }, [])

  return (
    <div>
        {
            advertisements.map(advertisements => (
                <div>
                    <h2>{advertisements.advertisement_title}</h2>
                    <p>{advertisements.advertisement_description}</p>
                </div>
            ))
        }
    </div>
  )
}
