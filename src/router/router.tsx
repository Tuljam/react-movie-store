import { MainTemplate } from "components";
import { HomePage, TrendsPage, FavoritesPage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
    </Route>,
  ),
);
