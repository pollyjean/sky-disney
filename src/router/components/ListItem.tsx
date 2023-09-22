import { Link } from "react-router-dom";
import { CharacterDetailsApi } from "../../commonConfig";

const ListItem = (props: CharacterDetailsApi) => {
  return (
    <li>
      <Link to={`characters/${props.id}`}>
        <img src={props.imageUrl} alt="" />
        {props.name}
      </Link>
    </li>
  );
};

export default ListItem;
