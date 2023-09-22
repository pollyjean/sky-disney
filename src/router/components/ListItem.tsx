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
    padding: 1.5rem 1rem;
    border-radius: 1rem;
    gap: 0.5rem;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      color: ${(props) => props.theme.bgColor};
      background-color: ${(props) => props.theme.textColor};
    }
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
