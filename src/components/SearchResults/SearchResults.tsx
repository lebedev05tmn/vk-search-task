import React, { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";
import { User } from "../../App";

import "./style.css";

// Интерфейс ддя props-состояния строки ввода
interface Props {
  searchValue: string;
}

export const SearchResults: React.FC<Props> = ({ searchValue }) => {
  const { users } = useContext(SearchContext);

  return (
    <div className="usersList">
      {users.length
        ? users.map((user: User) => <UserCard key={user.id} {...user} />)
        : searchValue !== ""
        ? `Input correct user-name`
        : `Input the user-name`}
    </div>
  );
};
