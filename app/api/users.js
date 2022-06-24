import apiClient from "./client";

const endPoint = "/users";

const register = (userInfo) => apiClient.post(endPoint, userInfo);

export default {
  register,
};
