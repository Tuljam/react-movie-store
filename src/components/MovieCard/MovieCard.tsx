import React from "react";
import { MovieCardStyled, Title, Image } from "./syles";

interface IProps {
  id: string;
  title: string;
  year: string;
  img: string;
  genre: string;
}
export const MovieCard = ({ id, title, img, genre, year }: IProps) => {
  return (
    <MovieCardStyled>
      <Image src={img} alt={title} />
      <Title>
        {title}, {year}
      </Title>
      <Title>{genre}</Title>
    </MovieCardStyled>
  );
};
