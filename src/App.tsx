import { Outlet } from "react-router-dom";
import { Header } from "./router/components";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 1280px;
  margin: 0 1rem;
`;

const App = () => {
  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
};

export default App;
