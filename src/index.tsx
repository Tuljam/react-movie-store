import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "router";

import { store } from "./store/store";
import { GlobalStyles } from "./ui/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <RouterProvider router={router} />
  </Provider>,
);
