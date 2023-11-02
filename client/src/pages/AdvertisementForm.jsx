import { Form, Formik } from "formik";
import { useAdvertisements } from "../context/AdvertisementProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdvertisementForm() {
  const { createAdvertisement, getAdvertisement, updateAdvertisement } = useAdvertisements();
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
    <div>
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
            <h1>
              {params.code ? "Edit Advertisement" : "New Advertisement"}
            </h1>
            <label>Title</label>
            <input
              type="text"
              name="advertisement_title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.advertisement_title}
            />

            <label>Description</label>
            <textarea
              name="advertisement_description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.advertisement_description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving . . ." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
