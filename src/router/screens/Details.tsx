import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchDetails } from "../../api";
import { ErrorPage, Loader } from ".";
import { CharacterDetailsApi } from "../../commonConfig";
import styled from "styled-components";
import { ImageBox } from "../components";

const DetailPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  a {
    text-decoration: underline;
  }
`;

const TagWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TagList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0;
  min-width: 90%;
`;

const Tag = styled.li`
  display: inline-flex;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.textColor};
  min-width: 5rem;
  gap: 0.5rem;
  border-radius: 1rem;
  text-align: center;
`;

const PageLink = styled(Link)`
  display: inline-flex;
  color: ${(props) => props.theme.textColor};
`;

const Details = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<CharacterDetailsApi>({
    queryKey: [`character-${id}`],
    queryFn: () => fetchDetails(id as string),
  });
  if (isLoading) return <Loader />;
  if (error) return <ErrorPage error={error as string} />;
  return (
    <DetailPage>
      <ImageBox url={data?.imageUrl} />
      <h2>
        {data?.name}
        {data?.name && <PageLink to={data?.sourceUrl as string}>({data?.name}'s Page)</PageLink>}
      </h2>

      <TagWrap>
        <h3>List of Movies</h3>
        <TagList>
          {data?.films?.map((item, index) => (
            <Tag key={index}>{item}</Tag>
          ))}
        </TagList>
      </TagWrap>
    </DetailPage>
  );
};

export default Details;
