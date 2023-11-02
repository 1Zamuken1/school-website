import { useContext, useState } from "react";
import {
  getAdvertisementsRequest,
  createAdvertisementRequest,
  deleteAdvertisementRequest,
  getAdvertisementRequest,
  updateAdvertisementRequest,
} from "../api/advertisements.api";
import { AdvertisementContext } from "./AdvertisementContext";

export const useAdvertisements = () => {
  const context = useContext(AdvertisementContext);
  if (!context) {
    throw new Error(
      "UseAdvertisements requires context to be defined in your application"
    );
  }
  return context;
};

export const AdvertisementContextProvider = ({ children }) => {
  const [advertisements, setAdvertisements] = useState([]);

  async function loadAdvertisements() {
    const response = await getAdvertisementsRequest();
    setAdvertisements(response.data);
  }

  const deleteAdvertisement = async (code) => {
    try {
      const response = await deleteAdvertisementRequest(code);
      setAdvertisements(
        advertisements.filter((advertisement) => advertisement.code !== code)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const createAdvertisement = async (advertisement) => {
    try {
      const response = await createAdvertisementRequest(advertisement);
    } catch (error) {
      console.log(error);
    }
  };

  const getAdvertisement = async (code) => {
    try {
      const response = await getAdvertisementRequest(code);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateAdvertisement = async (code, newFields) => {
    try {
      const response = await updateAdvertisementRequest(code, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <AdvertisementContext.Provider
      value={{
        advertisements,
        loadAdvertisements,
        deleteAdvertisement,
        createAdvertisement,
        getAdvertisement,
        updateAdvertisement,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
