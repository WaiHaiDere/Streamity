// const route = "http://localhost:5002";

export const createRoomRoute = `/api/room`;
export const getRoomRoute = (id) => `/api/room/${id}`;
export const spotifyLoginRoute = `http://localhost:5002/api/spotify/login`;
export const spotifyTokenRoute = `/api/spotify/authorise`;
export const updateTokenRoute = (id) => `/api/room/${id}/auth`;
export const addDeviceIDRoute = (id) => `/api/room/${id}/device`;
export const spotifySearchRoute = `/api/spotify/search`;
export const spotifyPlayerPlayRoute = `/api/spotify/play`;
export const spotifyPlayerPauseRoute = `/api/spotify/pause`;
