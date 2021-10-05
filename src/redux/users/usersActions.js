export const FETCH_USERS_BEGIN = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const ADD_USER = "ADD_USER";
export const DELETE_REQUEST = "DELETE_REQUEST";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";

export const fetchUsersBegin = () => {
  return {
    type: FETCH_USERS_BEGIN,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

export const deleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};

export const deleteRequest = (user) => {
  return {
    type: DELETE_REQUEST,
    payload: user,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const updateUserRequest = (user) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: user,
  };
};
