import { useEffect } from "react";
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
}