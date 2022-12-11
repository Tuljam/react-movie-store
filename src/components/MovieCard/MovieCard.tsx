import React from "react";

interface IProps {
  id: string;
  title: string;
  img: string;
  genre: string;
}
export const MovieCard = ({ title, img, genre }: IProps) => {
  return (
    <li>
      <h2>{title}</h2>
      <h3>{genre}</h3>
      <img src={img} alt={title} />
    </li>
  );
};
