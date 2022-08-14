import axios from "axios";
import Axios, { AxiosRequestConfig } from "axios";

export interface Credentials {
  email: string;
  password: string;
}

export const onLogin = async (data: Credentials) => {
  let apiRes = null;
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: "/users/login",
    data,
  };
  try {
    apiRes = await axios.post("/users/login");
    const { data: response } = await Axios.request(requestConfig);
    console.log(response);
  } catch (e) {
    apiRes = e.response;
    console.error(e);
    return { error: e.response.data.message };
  } finally {
    console.log(apiRes);
  }
};

export const onRegister = async (data: Credentials) => {
  console.log(data);
  try {
    const { data } = await axios.post(`/users/register`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};
