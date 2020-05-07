import { getRoomRoute } from "./apiRoutes";

export const getRoom = async (pin) => {
  const response = await fetch(getRoomRoute(pin)).then((res) => res.json());
  // console.log(response);
  return response;
};

export default getRoom;
