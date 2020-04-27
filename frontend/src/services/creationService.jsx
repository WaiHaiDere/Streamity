import { createRoomRoute } from "./apiRoutes";

export const getPin = async (username) => {
  const newParams = {
    username,
  };

  const reqBody = JSON.stringify(newParams);

  const res = await fetch(createRoomRoute, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
    body: reqBody,
  }).then((response) => response.json());

  return res;
};

export default getPin;
