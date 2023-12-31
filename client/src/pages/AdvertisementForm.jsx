import { Form, Formik } from "formik";
import { useAdvertisements } from "../context/AdvertisementProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdvertisementForm() {
  const { createAdvertisement, getAdvertisement, updateAdvertisement } =
    useAdvertisements();
  const [advertisement, setAdvertisement] = useState({
    advertisement_title: "",
    advertisement_description: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadAdvertisement = async () => {
      if (params.code) {
        const course = await getAdvertisement(params.code);
        setAdvertisement({
          advertisement_title: advertisement.advertisement_title,
          advertisement_description: advertisement.advertisement_description,
        });
      }
    };
    loadAdvertisement();
  }, []);

  return (
    <div className="mx-auto">
      <Formik
        initialValues={advertisement}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.code) {
            await updateAdvertisement(params.code, values);
          } else {
            await createAdvertisement(values);
          }
          navigate("/");
          setAdvertisement({
            advertisement_title: "",
            advertisement_description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold text-Ice">
              {params.code ? "Edit Advertisement" : "New Advertisement"}
            </h1>
            <label className="block mt-2 text-2xl font-bold text-Abysm">
              Title
            </label>
            <input
              type="text"
              name="advertisement_title"
              placeholder="Write a title"
              className="px-2 py-1 rounded-sm w-full text-Black"
              onChange={handleChange}
              value={values.advertisement_title}
            />

            <label className="block mt-2 text-2xl font-bold text-Abysm">
              Description
            </label>
            <textarea
              name="advertisement_description"
              rows="3"
              placeholder="Write a description"
              className="px-2 py-1 rounded-sm w-full text-Black"
              onChange={handleChange}
              value={values.advertisement_description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-Ice text-Melancholia font-bold px-2 py-1 w-full rounded-md"
            >
              {isSubmitting ? "Saving . . ." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
