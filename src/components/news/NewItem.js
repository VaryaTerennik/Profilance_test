import { useDispatch } from "react-redux";
import { changeStatus, deleteNew } from "../../redux/NewsSlice";
import "./newitem.scss";

function NewItem({ id, title, text, date, status, login }) {
  const dispatch = useDispatch();

  const handleChangeStatus = (e) => {
    let id = e.target.id;
    dispatch(changeStatus({ id }));
  };

  const handleDeleteNew = (e) => {
    let id = e.target.id;
    console.log(id);
    dispatch(deleteNew({ id }));
  };

  return (
    <div className="new">
      <div className="new__content">
        <div className="new__title">{title}</div>
        <div className="new__text">{text}</div>
        <div className="new__date">{date}</div>
        {status === false && <div className="new__status">Не одобрено</div>}
        <div className="new__buttons">
          {login === "Admin" && status === false && (
            <button
              className="new__button"
              id={id}
              onClick={handleChangeStatus}
            >
              Одобрить
            </button>
          )}
          {login === "Admin" && (
            <button className="new__button" id={id} onClick={handleDeleteNew}>
              Удалить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewItem;
