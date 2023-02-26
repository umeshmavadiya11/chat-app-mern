import { createSlice } from "@reduxjs/toolkit";
import { API_CONVERSATIONS, API_LOGIN, API_MESSAGES_GLOBAL, API_SEND_CONVERSATIONS, API_USER_LIST, GET_CONVERSATIONS_BY_ID_F, GET_CONVERSATIONS_BY_ID_S, GET_CONVERSATIONS_F, GET_CONVERSATIONS_S, GET_GLOBAL_MESAAGES_F, GET_GLOBAL_MESAAGES_S, SEND_CONVERSATIONS_F, SEND_CONVERSATIONS_S, SEND_MESSAGES_GLOBAL_F, SEND_MESSAGES_GLOBAL_S, USER_INFO_F, USER_INFO_S, USER_LIST_F, USER_LIST_S } from "../constants";

const initialState = {
  userList: [],
  userInfo: {},
  conversations:[],
  messages:[]
};

export const getUserList = () => ({
  type: "API",
  payload: {
    url: API_USER_LIST,
    hideLoader: false,
    success: (data) => ({
      type: USER_LIST_S,
      payload: data,
    }),
    error: (data) => ({
      type: USER_LIST_F,
      payload: [],
    }),
  },
});

export const getConversations = () => ({
  type: "API",
  payload: {
    url: API_CONVERSATIONS,
    hideLoader: false,
    success: (data) => ({
      type: GET_CONVERSATIONS_S,
      payload: data,
    }),
    error: (data) => ({
      type: GET_CONVERSATIONS_F,
      payload: [],
    }),
  },
});

export const getConversationsById = (id) => ({
  type: "API",
  payload: {
    url: `${API_CONVERSATIONS}/query?userId=${id}`,
    hideLoader: false,
    success: (data) => ({
      type: GET_CONVERSATIONS_BY_ID_S,
      payload: data,
    }),
    error: (data) => ({
      type: GET_CONVERSATIONS_BY_ID_F,
      payload: [],
    }),
  },
});

export const sendConversationMessage = (data) => ({
  type: "API",
  payload: {
    method:'POST',
    url: API_SEND_CONVERSATIONS,
    data: data,
    hideLoader: false,
    success: (data) => ({
      type: SEND_CONVERSATIONS_S,
      payload: data,
    }),
    error: (data) => ({
      type: SEND_CONVERSATIONS_F,
      payload: [],
    }),
  },
});

export const sendGlobalMessage = (data) => ({
  type: "API",
  payload: {
    method:'POST',
    url: API_MESSAGES_GLOBAL,
    data: data,
    hideLoader: false,
    success: (data) => ({
      type: SEND_MESSAGES_GLOBAL_S,
      payload: data,
    }),
    error: (data) => ({
      type: SEND_MESSAGES_GLOBAL_F,
      payload: [],
    }),
  },
});


export const getGlobalMessages = () => ({
  type: "API",
  payload: {
    url: API_MESSAGES_GLOBAL,
    hideLoader: false,
    success: (data) => ({
      type: GET_GLOBAL_MESAAGES_S,
      payload: data,
    }),
    error: (data) => ({
      type: GET_GLOBAL_MESAAGES_F,
      payload: [],
    }),
  },
});



// Reducer
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(USER_LIST_S, (state, action) => {
      state.userList = action.payload;
    });
    builder.addCase(USER_LIST_F, (state, action) => {
      state.userList = [];
    });
    builder.addCase(USER_INFO_S, (state, action) => {
      state.userInfo = action.payload.data;
    });
    builder.addCase(USER_INFO_F, (state, action) => {
      state.userInfo = {};
    });

    builder.addCase(GET_CONVERSATIONS_S, (state, action) => {
      console.log("action.payload",action.payload)
      state.conversations = action.payload;
    });
    builder.addCase(GET_CONVERSATIONS_F, (state, action) => {
      state.conversations = [];
    });

    builder.addCase(GET_CONVERSATIONS_BY_ID_S, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(GET_CONVERSATIONS_BY_ID_F, (state, action) => {
      state.messages = [];
    });

    builder.addCase(GET_GLOBAL_MESAAGES_S, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(GET_GLOBAL_MESAAGES_F, (state, action) => {
      state.messages = [];
    });


    // builder.addCase(GET_GLOBAL_MESAAGES_S, (state, action) => {
    //   state.messages = action.payload;
    // });
    // builder.addCase(GET_GLOBAL_MESAAGES_F, (state, action) => {
    //   state.messages = [];
    // });
    // SEND_CONVERSATIONS_S

    
  },
});

export const { loaderChange } = userSlice.actions;
export default userSlice.reducer;
