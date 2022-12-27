import { Header } from "components/Header/Header";
import { Outlet } from "react-router";
import { SignInTemplateStyled } from "./styles";

export const SignInTemplate = () => {
  return (
    <SignInTemplateStyled>
      <Header />
      <Outlet />
    </SignInTemplateStyled>
  );
};
