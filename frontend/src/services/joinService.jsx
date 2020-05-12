import { getRoomRoute, addDeviceIDRoute } from "./apiRoutes";

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

export const addDevice = async ({ pin, deviceID, authToken }) => {
  const newParams = {
    deviceID,
    authToken,
  };

  const reqBody = JSON.stringify(newParams);

  const res = await fetch(addDeviceIDRoute(pin), {
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
