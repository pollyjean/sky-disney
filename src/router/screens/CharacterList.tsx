import { useQuery } from "@tanstack/react-query";
import { CharacterListApi } from "../../commonConfig";
import { fetchCharacterList } from "../../api";
import { ErrorPage, Loader } from ".";
import { ListItem } from "../components";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr;
  gap: 2rem;
`;

const CharacterList = () => {
  const { isLoading, error, data } = useQuery<CharacterListApi[]>({
    queryKey: ["characterList"],
    queryFn: fetchCharacterList,
  });
  if (isLoading) return <Loader />;
  if (error) return <ErrorPage error={error as string} />;
  const filteredData = data?.slice(0, 100);
  return (
    <List>
      {filteredData?.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </List>
  );
};

export default CharacterList;
