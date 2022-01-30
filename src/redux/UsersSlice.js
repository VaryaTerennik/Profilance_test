import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const initialUsers = [
  { id: 0, login: "Ivan", password: "12345" },
  { id: 1, login: "Admin", password: "12345" },
];

export const UsersSlice = createSlice({
  name: "userslist",
  initialState,
  initialUsers,
  reducers: {
    fnAuth: (state, action) => {
      const { user } = action.payload;
      try {
        const usernew = initialUsers.find((el) => el.login === user.name);
        if (usernew.password === user.password) {
          return usernew;
        } else {
          alert("Неверный логин или пароль");
          return false;
        }
      } catch (error) {
        const errorCode = error.code;
        console.log(errorCode);
        alert("Неверный логин или пароль");
        return false;
      }
    },
  },
});

export const { fnAuth } = UsersSlice.actions;

export const usersListSelector = () => (state) => state.userslist || [];

export default UsersSlice.reducer;
