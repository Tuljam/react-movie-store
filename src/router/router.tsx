import { MainTemplate } from "components";
import { RequareAuth } from "components/RequareAuth/RequareAuth";
import {
  HomePage,
  TrendsPage,
  FavoritesPage,
  SettingsPage,
  MovieCardPage,
  UserPassWordPage,
  SignInPage,
  SignUpPage,
} from "pages";
import { SearchPage } from "pages/SearchPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      {/* private route */}

      <Route path={ROUTE.FAVORITES} element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      </Route>

      <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
      <Route path={ROUTE.MOVIE_CARD} element={<MovieCardPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.PASSWORD} element={<UserPassWordPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
    </Route>,
  ),
);
