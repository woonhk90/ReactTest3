import Card from "../Ui/Card";
import classes from "./UsersList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.usersList.map((v) => (
          <li key={v.id}>
            {v.name} ({v.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
