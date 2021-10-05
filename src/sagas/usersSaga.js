import { takeEvery, call, put, all } from "redux-saga/effects";
import {
  FETCH_USERS_BEGIN,
  fetchUsersSuccess,
  deleteUser,
  ADD_USER,
  DELETE_REQUEST,
  UPDATE_USER_REQUEST,
  UPDATE_USER,
  DELETE_USER,
} from "./../redux/users/usersActions";

//Worker Sagas
function* loadUsers(action) {
  const response = yield call(
    fetch,
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = yield response.json();
  yield put(fetchUsersSuccess(users));
}

function* deleteUserWorker(action) {
  console.log("deleted");
  yield call(
    fetch,
    `https://jsonplaceholder.typicode.com/users/${action.payload.id}`,
    {
      method: "DELETE",
    }
  );

  yield put(deleteUser(action.payload));
}

function* addUserWorker(action) {
  console.log("added");
  yield call(fetch, `https://jsonplaceholder.typicode.com/users`, {
    method: "POST",
    body: action.payload,
  });
}

function* updateUserWorker(action) {
  console.log("updated");
  yield call(
    fetch,
    `https://jsonplaceholder.typicode.com/users/${action.payload.id}`,
    { method: "PUT", body: action.payload }
  );
}

//Watcher Sagas
function* watchLoadUsers() {
  yield takeEvery(FETCH_USERS_BEGIN, loadUsers);
}

function* watchDeleteUser() {
  yield takeEvery(DELETE_REQUEST, deleteUserWorker);
}

function* watchAddUser() {
  yield takeEvery(ADD_USER, addUserWorker);
}

function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, updateUserWorker);
}

//combine sagas
export function* usersSaga() {
  yield all([
    watchLoadUsers(),
    watchDeleteUser(),
    watchAddUser(),
    watchUpdateUser(),
  ]);
}
