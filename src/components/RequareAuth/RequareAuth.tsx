import React from "react";
import { Navigate, Outlet } from "react-router";
import { ROUTE } from "router";

export const RequareAuth = () => {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_UP} />;
};
