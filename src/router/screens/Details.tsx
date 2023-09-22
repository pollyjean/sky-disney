import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchDetails } from "../../api";
import { ErrorPage, Loader } from ".";
import { CharacterDetailsApi } from "../../commonConfig";

const Details = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<CharacterDetailsApi>({
    queryKey: ["characterDetail"],
    queryFn: () => fetchDetails(id as string),
  });
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    console.log("Error : ", error);
    return <ErrorPage />;
  }
  return (
    <div>
      {data?.imageUrl && <img src={data?.imageUrl} />}
      <h2>{data?.name}</h2>
      <Link to={data?.sourceUrl as string}>{data?.name}'s Page</Link>
      <ul>
        {data?.films?.map((item) => (
          <li>${item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
