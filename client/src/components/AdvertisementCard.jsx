import { useAdvertisements } from "../context/AdvertisementProvider/AdvertisementProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/*export default function AdvertisementCard({ advertisement }) {
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
}*/

export default function Advertisementcard({ advertisement }) {
  const { deleteAdvertisement } = useCourses(advertisement);
  const navigate = useNavigate();

  return (
    <div className='bg-Meteor rounded-md p-4'>
      <header className='flex justify-between'>
        <h2 className='text-xl font-bold'>{advertisement.advertisement_title}</h2>
        <button onClick={navigateToCreatedAdvertisement}>
          <IoReorderThreeOutline className='text-3xl text-White ' />
        </button>
      </header>
      <p className='text-xs'>{advertisement.advertisement_description}</p>
      <span>{advertisement.createAt}</span>
      <div className='flex gap-x-2'>
        <button
          className='bg-Romance px-2 py-1'
          onClick={() => deleteAdvertisement(advertisement.code)}
        >
          Delete
        </button>
        <button
          className='bg-Aquarius px-2 py-1'
          onClick={() => navigate(`/edit-advertisement/${advertisement.code}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
