import { useAuth0 } from "@auth0/auth0-react";
import { usersListSelector } from "../../redux/UsersSlice";
import { useSelector } from "react-redux";
import React from "react";
import "./main.scss";

function Main({ user }) {
  // let user = useSelector((state) => state.userslist);
  // console.log(user);
  return (
    <main className="main">
      {user.login && (
        <div className="main__content">
          <div className="main__item">Привет, {user.login}</div>
        </div>
      )}
      {!user.login && (
        <div className="main__content">
          <div className="main__item">Привет, Гость</div>
        </div>
      )}
    </main>
  );
}

export default Main;
