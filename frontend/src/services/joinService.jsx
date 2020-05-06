import { getRoomRoute } from "./apiRoutes";

export const joinRoom = async ({ pin, username }) => {
  const newParams = {
    username,
  };

  const reqBody = JSON.stringify(newParams);

  const res = await fetch(getRoomRoute(pin), {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "PUT",
    body: reqBody,
  }).then((response) => response.json());

  return res;
};

export default joinRoom;
