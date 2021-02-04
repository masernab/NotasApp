import Swal from "sweetalert2";

import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";

import { types } from "../types/types";
import { noteLogout } from "./notes";
import { removeLoading, setError, setLoading } from "./ui";

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(setLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(removeLoading());
      })
      .catch(({ message }) => {
        dispatch(setError(message));
        dispatch(removeLoading());
        Swal.fire("Error", message, "error");
      });
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });
        // console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch(({ message }) => {
        dispatch(setError(message));
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(noteLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
