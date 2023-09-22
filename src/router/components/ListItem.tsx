import { Link } from "react-router-dom";
import { CharacterDetailsApi } from "../../commonConfig";
import styled from "styled-components";
import { ImageBox } from ".";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ListItem = (props: CharacterDetailsApi) => {
  return (
    <Item>
      <Link to={`characters/${props.id}`}>
        <ImageBox url={props?.imageUrl} />
        <p>{props.name}</p>
      </Link>
    </Item>
  );
};

export default ListItem;
