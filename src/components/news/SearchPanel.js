import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./searchpanel.scss";

function SearchPanel({ updateData }) {
  const { register, getValues } = useForm();

  useEffect(() => {
    getValues("nametext");
  }, [getValues("nametext")]);

  return (
    <div className="search">
      <div className="search__wrappep">
        <div className="search__line">
          <form>
            <div className="search__title">Поиск</div>
            <input
              className="search__input"
              type="text"
              onInput={() => updateData(getValues("nametext"))}
              {...register("nametext", {})}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
