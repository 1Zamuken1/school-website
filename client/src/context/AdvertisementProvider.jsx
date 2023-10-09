import { createContext, useContext, useState } from "react";
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
    const response = await getAdvertisementRequest();
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
};
