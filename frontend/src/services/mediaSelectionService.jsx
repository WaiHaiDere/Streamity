export const getPin = async () => {
  return {
    status: 200,
    error: false,
    body: {
      pin: "123456",
    },
  };
};

export default getPin;
