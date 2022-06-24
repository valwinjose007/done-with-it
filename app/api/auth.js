import apiClient from "./client";

const endPoint = "/auth";

const login = (email, password) =>
  apiClient.post(endPoint, { email, password });

export default {
  login,
};
