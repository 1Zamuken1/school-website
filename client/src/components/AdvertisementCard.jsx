import { useAdvertisements } from "../context/AdvertisementProvider/AdvertisementProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdvertisementCard({ advertisement }) {
  const { deleteAdvertisement } = useAdvertisements(advertisement);
  const Navigate = useNavigate();
  return (
    <div>
      <header>
        <Link to={`/advertisements/${advertisement.code}`}>
          {advertisement.advertisement_title}
        </Link>
        <button onClick={() => Navigate(`/new-advertisement`)}></button>
      </header>
      <p> {advertisement.advertisement_description} </p>
      <span>{advertisement.createAt}</span>
      <div>
        <button onClick={() => deleteAdvertisement(advertisement.code)}>
          Delete
        </button>
        <button
          onClick={() => Navigate(`/edit-advertisement/${advertisement.code}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
