export const getPin = async () => {
  const res = await fetch("http://localhost:8000/api/pin").then((response) =>
    response.json()
  );

  return res;
};

export default getPin;
