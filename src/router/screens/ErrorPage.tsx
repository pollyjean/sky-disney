import styled from "styled-components";
import { ErrorProps } from "../../commonConfig";
import { Header } from "../components";

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorPage: React.FunctionComponent<ErrorProps> = ({ error }) => {
  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <NotFound>
          <Header />
          <p>Page Not Found</p>
        </NotFound>
      )}
    </>
  );
};

export default ErrorPage;
