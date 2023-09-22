import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header>
      <h1>Disney Characters</h1>
      {pathname !== "/" && <Link to="/">&larr;</Link>}
    </header>
  );
};

export default Header;
