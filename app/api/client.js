import { create } from "apisauce";
import authStorage from "../auth/storage";

import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.1.9:9000/api",
});

//to call protected endpoint
// apiClient.addAsyncResponseTransform(async (request) => {
//   const authToken = await authStorage.getToken();
//   if (!authToken) return;
//   request.headers[("x-auth-token", authToken)];
// });

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  console.log("coming.......");
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data);
    console.log("saved", url);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
