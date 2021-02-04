import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { firebase } from "../firebase/firebaseConfig";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [cheking, setCheking] = useState(true);

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setLoggedIn(false);
      }
      setCheking(false);
    });
  }, [dispatch]);

  if (cheking) {
    return <h3>Wait...</h3>;
  }

  return (
    <Router>
      <div>
        {/* <JournalScreen /> */}
        <Switch>
          <PublicRouter
            isLoggedIn={isLoggedIn}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRouter
            isLoggedIn={isLoggedIn}
            exact
            path="/"
            component={JournalScreen}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
