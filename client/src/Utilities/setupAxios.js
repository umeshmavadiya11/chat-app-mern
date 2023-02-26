import { LOGIN_F, LOGIN_S, LS_AUTHTOKEN, LS_USER } from "../constants";

 const setupAxios = (axios, store) => {
    const token = JSON.parse(localStorage.getItem(LS_AUTHTOKEN));
    const userData = JSON.parse(localStorage.getItem(LS_USER));
  
    if (token) {
      store.dispatch({ type: LOGIN_S, payload: userData });
    } else {
      store.dispatch({ type: LOGIN_F, payload: {} });
    }
    axios.interceptors.response.use(null, (err) => {
      if (err.response) {
        if (err.response.status === 403) {
          store.dispatch({ type: LOGIN_F });
          return Promise.reject(err);
        } else {
          return Promise.reject(err);
        }
      } else if (err.request) {
        return Promise.reject({
          response: {
            data: {
              message: "Something went wrong, Please try again later!!!",
            },
          },
        });
      }
    });
  };
  
export default setupAxios;  