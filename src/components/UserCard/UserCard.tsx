import "./style.css";
import { User } from "../../App";

export const UserCard: React.FC<User> = ({
  image,
  firstName,
  lastName,
  address,
}) => {
  // Деструктуризация props
  const { city } = address;
  return (
    <div className="userCard">
      <img className="userPic" src={image} />
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{city}</div>
      </div>
    </div>
  );
};
