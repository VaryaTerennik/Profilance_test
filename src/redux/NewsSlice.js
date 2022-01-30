import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [
    {
      id: 0,
      userId: 0,
      title: "Новость 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "29.01.2022",
      status: true,
    },
    {
      id: 1,
      userId: 0,
      title: "Новость 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "29.01.2022",
      status: false,
    },
    {
      id: 2,
      userId: 1,
      title: "Новость 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "29.01.2022",
      status: true,
    },
    {
      id: 3,
      userId: 0,
      title: "Новость 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "29.01.2022",
      status: true,
    },
    {
      id: 4,
      userId: 1,
      title: "Новость 5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "29.01.2022",
      status: true,
    },
    {
      id: 5,
      userId: 1,
      title: "Новость 6",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "29.01.2022",
      status: true,
    },
    {
      id: 6,
      userId: 1,
      title: "Новость 7",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "29.01.2022",
      status: false,
    },
    {
      id: 7,
      userId: 1,
      title: "Новость 8",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "29.01.2022",
      status: false,
    },
  ],
};

export const NewsSlice = createSlice({
  name: "newslist",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      const { id } = action.payload;
      state.news.find((el) => el.id === +id).status = !state.news.find(
        (el) => el.id === +id
      ).status;
    },
    deleteNew: (state, action) => {
      const { id } = action.payload;
      state.news.splice(
        state.news.findIndex((el) => el.id === +id),
        1
      );
    },
    addNew: (state, action) => {
      const { newItem } = action.payload;
      const { title, text, userId, date, status } = newItem;
      let id = state.news.length + 1;
      state.news.push({ title, text, userId, date, status, id });
    },
    searchString: (state, action) => {
      const { str } = action.payload;
      console.log(str);
      state.news.filter((el) => {
        console.log(el.title.indexOf(str));
        return el.title.indexOf(str) > -1;
      });
    },
    showNews: (state = initialState, action) => {
      const { user } = action.payload;
      console.log(user);
      if (!user.login || user === false) {
        console.log(state.news[0]);
        state.news.filter((el) => el.status === true);
      } else if (user.login !== "Admin") {
        state.news.filter(
          (el) =>
            el.userId === user.id ||
            (el.userId !== user.id && el.status === true)
        );
      } else {
        state.news.filter((el) => el.status === false || el.status === true);
      }
    },
  },
});

export const { showNews, changeStatus, deleteNew, addNew, searchString } =
  NewsSlice.actions;

export const newsListSelector = (user, str) => (state) =>
  !user.login
    ? state.newslist.news
        .filter((el) => el.status === true)
        .filter((el) => {
          console.log(el.title.indexOf(str));
          return el.title.indexOf(str) > -1;
        })
    : user.login !== "Admin"
    ? state.newslist.news
        .filter(
          (el) =>
            el.userId === user.id ||
            (el.userId !== user.id && el.status === true)
        )
        .filter((el) => {
          console.log(el.title.indexOf(str));
          return el.title.indexOf(str) > -1;
        })
    : state.newslist.news.filter((el) => {
        console.log(el.title.indexOf(str));
        return el.title.indexOf(str) > -1;
      });

export default NewsSlice.reducer;
