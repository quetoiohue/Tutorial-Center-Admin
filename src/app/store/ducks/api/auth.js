import axiosApi from "../../../utils/request";
export const LOGIN_URL = "api/auth/login";

const getURLSearchParams = data => {
  const paramArr = Object.keys(data).map(key => {
    return key + "=" + data[key];
  });
  return paramArr.join("&");
};

export async function login(email, password) {
  const data = await getURLSearchParams({ email, password });
  try {
    const user = await axiosApi.post(LOGIN_URL, data);
    return user;
  } catch (error) {
    console.log(error);
  }
}
