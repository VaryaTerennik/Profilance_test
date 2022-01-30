import Main from "./router/Main";
import Login from "./router/Login";
import NewsList from "./router/NewsList";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { usersListSelector } from "../redux/UsersSlice";
import "./layout.scss";

function Layout() {
  let user = useSelector(usersListSelector());

  return (
    <Router>
      <div className="nav">
        <div className="nav__menu">
          <div className="nav__list">
            <button className="nav__item">
              <Link to="/">
                <img
                  src="https://camo.githubusercontent.com/a2676d223d98caa2fb625d37d9fc911a8eab620ae99d6aadaad02fd26680ab67/68747470733a2f2f7374617469632e74696c646163646e2e636f6d2f74696c64333633382d333333382d343133362d623033382d3331333133323330363433382f47726f75705f3634302e737667"
                  alt="General"
                />
              </Link>
            </button>
            <button className="nav__item">
              <Link to="/login">Вход/Выход</Link>
            </button>
            <button className="nav__item">
              <Link to="/news">Новости</Link>
            </button>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Main user={user} />}></Route>
          <Route path="/news" element={<NewsList user={user} />}></Route>
          <Route path="/login" element={<Login user={user} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;
