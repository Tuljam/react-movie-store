import { MainTemplate } from "components";
import { HomePage, TrendsPage, FavoritesPage } from "pages";
import { SettingsPage } from "pages/SettingsPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path={ROUTE.HOME} element={<HomePage />} />
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
    </Route>,
  ),
);
