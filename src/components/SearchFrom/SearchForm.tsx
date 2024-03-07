import React from "react";
import "./styles.css";

// Интерфейс для props-функции обновления состояния
interface Props {
  setSearchValue: (value: string) => void;
}

export const SearchForm: React.FC<Props> = ({ setSearchValue }) => {
  // Функция-обработчик изменения состояния поля ввод
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  // Функция-обработчик события отправки формы
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    evt.currentTarget.reset();
  };

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};
