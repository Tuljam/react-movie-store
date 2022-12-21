import { TrendsPage } from "pages";
import { FavoritesPage } from "pages/FavoritesPage";
import { HomePage } from "pages/HomePage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/trends" element={<TrendsPage />} />
    </Route>,
  ),
);
