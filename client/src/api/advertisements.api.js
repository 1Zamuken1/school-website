import axios from "axios";

export const getAdvertisementsRequest = async () =>
  await axios.get("http://localhost:4000/advertisements");

export const getAdvertisementsByCourseRequest = async (courseCode) =>
  await axios.get(`http://localhost:4000/advertisements?courseCode=${courseCode}`);

export const createAdvertisementRequest = async (advertisement) =>
  await axios.post("http://localhost:4000/advertisements", advertisement);

export const deleteAdvertisementRequest = async (code) =>
  await axios.delete(`http://localhost:4000/advertisements/${code}`);

export const getAdvertisementRequest = async (code) =>
  await axios.get(`http://localhost:4000/advertisements/${code}`);

export const updateAdvertisementRequest = async (code, newFields) =>
  await axios.put(`http://localhost:4000/advertisements/${code}`, newFields);
