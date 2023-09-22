import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  h1 {
    font-size: 3rem;
  }
`;

const BackLink = styled(Link)`
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};
`;

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Heading>
      <h1>Disney Characters</h1>
      {pathname !== "/" && <BackLink to="/">&larr; back to the Main</BackLink>}
    </Heading>
  );
};

export default Header;
