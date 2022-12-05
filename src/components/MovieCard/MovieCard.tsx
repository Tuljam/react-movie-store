import React from "react";

interface IProps {
  id: string;
  title: string;
  img: string;
}
export const MovieCard = ({ id, title, img }: IProps) => {
  return (
    <li>
      <h2>{title}</h2>
      <img src={img} alt="" />
    </li>
  );
};
