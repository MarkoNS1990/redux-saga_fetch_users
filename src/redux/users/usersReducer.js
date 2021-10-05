import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  DELETE_USER,
  ADD_USER,
  DELETE_REQUEST,
  UPDATE_USER,
  UPDATE_USER_REQUEST,
} from "./usersActions";

const initState = {
  users: [],
  loading: false,
  error: "",
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
    case DELETE_REQUEST:
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
        loading: false,
      };
    case UPDATE_USER:
      const userToUpdate = state.users.find(
        (user) => user.id === action.payload.id
      );
      state.users.splice(state.users.indexOf(userToUpdate), 1, action.payload);

      return {
        ...state,
        users: [...state.users],
      };
    default:
      return state;
  }
};

export default usersReducer;
