import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { useDispatch } from "react-redux";
import { fnAuth } from "../../redux/UsersSlice";
import { showNews } from "../../redux/NewsSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function Login({ user }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onFormSubmit = (data) => {
    const user = {
      name: data.name,
      password: data.password,
    };
    dispatch(fnAuth({ user }));
    navigate("/");
  };

  useEffect(() => {
    dispatch(showNews({ user }));
  }, [user]);

  return (
    <div className="popup">
      <div className="popup__wrapper">
        <div className="popup__content">
          <p className="popup__title">Введите логин и пароль</p>
          <form onSubmit={handleSubmit(onFormSubmit)} className="popup__form">
            <input
              className="popup__form-input"
              type="name"
              {...register("name", {
                required: true,
              })}
            />
            <input
              className="popup__form-input"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <button type="submit" className="popup__button">
              Авторизоваться
            </button>
            {/* <button type="submit" className="popup__button">
              Авторизоваться
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
