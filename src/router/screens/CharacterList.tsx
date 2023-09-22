import { useQuery } from "@tanstack/react-query";
import { CharacterListApi } from "../../commonConfig";
import { fetchCharacterList } from "../../api";
import { ErrorPage, Loader } from ".";
import { ListItem } from "../components";

const CharacterList = () => {
  const { isLoading, error, data } = useQuery<CharacterListApi[]>({
    queryKey: ["characterList"],
    queryFn: fetchCharacterList,
  });
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    console.error("Error :", error);
    return <ErrorPage />;
  }
  return (
    <div>
      <ul>
        {data?.slice(0, 50).map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
