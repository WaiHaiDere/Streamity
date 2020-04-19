import { createRoomRoute } from "./apiRoutes";

export const getPin = async () => {
  const res = await fetch(createRoomRoute, {
    method: "POST",
  }).then((response) => response.json());

  return res;
};

export default getPin;
