import React, { useState, useEffect } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";

// Интерфейс элемента состояния массива users
export interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  address: {
    city: string;
  };
}

const App: React.FC = () => {
  // Размышляя о  расширяемости приложения можно внедрить state менеджмент
  // К примеру, с помощью Redux

  // состояние users представляет собой store ответов поискового запроса
  const [users, setUsers] = useState<[]>([]);

  //  состояние searchValue представляет собой значение поисковой строки
  const [searchValue, setSearchValue] = useState<string>("");

  // url поискового запроса
  const url: string = "https://dummyjson.com/users/search?q=";

  useEffect(() => {
    // Поисковый запрос можно оптимизировать переписав его с node-fetch на axios

    // Асинхронная функция получения и обработки данных get запроса
    const fetchData = async () => {
      try {
        // Обход лишних запросов при пустой строчке ввода
        if (searchValue === "") {
          setUsers([]);
        } else {
          // Асинхронный запрос get запрос по исходному url + введеной строчке
          const response = await fetch(url + searchValue);

          //Асинхронная обработка json ответа от fetch
          const data = await response.json();

          // Обновление состояния users
          setUsers(data.users);
        }
      } catch (error) {
        // Обработка ошибки запроса
        console.error(error);
      }
    };
    // Вызов функции получения данных
    fetchData();
  }, [searchValue]);

  return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm setSearchValue={setSearchValue} />
      <SearchResults searchValue={searchValue} />
    </SearchContext.Provider>
  );
};

export default App;
