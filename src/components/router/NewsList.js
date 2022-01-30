import NewItem from "../news/NewItem";
import SearchPanel from "../news/SearchPanel";
import { useDispatch, useSelector } from "react-redux";
import { newsListSelector, addNew, searchString } from "../../redux/NewsSlice";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "./newslist.scss";

function NewsList({ user }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState([]);

  const updateData = (data) => {
    console.log(data);
    setValues([data]);
  };

  const news = useSelector(newsListSelector(user, values));
  console.log(news);
  console.log(values);

  useEffect(() => {
    dispatch(searchString({ values }));
  }, [values]);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onFormSubmit = (data) => {
    const newItem = {
      title: data.title,
      text: data.text,
      userId: user.id,
      date: new Date().toLocaleDateString(),
      status: false,
    };
    dispatch(addNew({ newItem }));
  };

  return (
    <section className="main">
      <h1 className="main__title">Новости</h1>
      <SearchPanel updateData={updateData}></SearchPanel>
      <div className="main__wrapper">
        <div className="news">
          <ul className="news__list">
            {news.map((el) => (
              <li className="news__list-item">
                <NewItem
                  key={el.id}
                  login={user.login}
                  id={el.id}
                  title={el.title}
                  text={el.text}
                  date={el.date}
                  status={el.status}
                />
              </li>
            ))}
          </ul>
          {user.login && (
            <form className="news__form" onSubmit={handleSubmit(onFormSubmit)}>
              <div className="news__form-title">Добавить новость</div>
              <input
                type="title"
                className="news__form-input"
                {...register("title", {
                  required: true,
                })}
              ></input>
              <textarea
                type="text"
                className="news__form-input news__form-input_height"
                {...register("text", {
                  required: true,
                })}
              ></textarea>
              <button className="news__form-button" type="submit">
                Добавить
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsList;
