import { ErrorProps } from "../../commonConfig";
import { Header } from "../components";

const ErrorPage: React.FunctionComponent<ErrorProps> = ({ error }) => {
  return (
    <div>
      <Header />
      {error ? <div>{error}</div> : <p>Page Not Found</p>}
    </div>
  );
};

export default ErrorPage;
