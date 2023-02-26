// ENV CONSTANTS
export const { REACT_APP_API_URL: API_BASE } = process.env;
export const { REACT_APP_NAME: APP_NAME } = process.env;

// LOCALSTORAGE KEYNAME
export const LS_USER = `user${APP_NAME}`
export const LS_AUTHTOKEN = `authToken${APP_NAME}`

// TYPES FOR REDUCER
export const LOGIN_S = `LOGIN_S`;
export const LOGIN_F = `LOGIN_F`;

export const USER_LIST_S = `USER_LIST_S`;
export const USER_LIST_F = `USER_LIST_F`;

export const USER_INFO_S = `USER_INFO_S`;
export const USER_INFO_F = `USER_INFO_F`;

export const GET_CONVERSATIONS_S = `GET_CONVERSATIONS_S`;
export const GET_CONVERSATIONS_F = `GET_CONVERSATIONS_F`;

export const GET_CONVERSATIONS_BY_ID_S = `GET_CONVERSATIONS_BY_ID_S`;
export const GET_CONVERSATIONS_BY_ID_F = `GET_CONVERSATIONS_BY_ID_F`;

export const GET_GLOBAL_MESAAGES_S = `GET_GLOBAL_MESAAGES_S`;
export const GET_GLOBAL_MESAAGES_F = `GET_GLOBAL_MESAAGES_F`;

export const SEND_CONVERSATIONS_S = `SEND_CONVERSATIONS_S`;
export const SEND_CONVERSATIONS_F = 'SEND_CONVERSATIONS_F';

export const SEND_MESSAGES_GLOBAL_S = 'SEND_MESSAGES_GLOBAL_S';
export const SEND_MESSAGES_GLOBAL_F = 'SEND_MESSAGES_GLOBAL_F';



// API ENDPOINTS
export const API_LOGIN = `/api/users/login`;
export const API_REGISTER = `/api/users/register`;
export const API_CONVERSATIONS = `/api/messages/conversations`;
export const API_SEND_CONVERSATIONS = `/api/messages/`;
export const API_MESSAGES_GLOBAL = `/api/messages/global`;
export const API_USER_LIST = `/api/users`;







export const API_USER_INFO = `admin/userInfo`;