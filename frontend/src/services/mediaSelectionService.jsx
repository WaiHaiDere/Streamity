import { getRoomRoute } from "./apiRoutes";

export const getRoom = async (pin) => {
  const response = await fetch(getRoomRoute(pin)).then((res) => res.json());
  // console.log(response);

  if (response.message) {
    return { error: "Invalid PIN" };
  }
  return response;
};

export default getRoom;
