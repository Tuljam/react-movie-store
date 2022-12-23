import { MainTemplate } from "components";
import { HomePage, TrendsPage, FavoritesPage, SettingsPage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />

      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
    </Route>,
  ),
);
