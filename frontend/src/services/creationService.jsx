export const getCall = async () => {
  const res = await fetch("http://localhost:8000/").then((response) =>
    response.json()
  );

  return res;
};

export default getCall;
