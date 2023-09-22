import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorPage, CharacterList, Details } from "./router/screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CharacterList />,
      },
      {
        path: "characters/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
