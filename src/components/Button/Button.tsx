import React from "react";
import { ButtonStyled } from "./styles";

interface IButton {
  children: string;
  type?: "button" | "submit" | "reset";
  widthBtn?: string;
  bgColor?: string;
  brColor?: string;
  colorBtn?: string;
}

export const Button = (props: IButton) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};
