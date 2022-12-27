import styled from "styled-components";
import { Color, Media, typography } from "../../ui";

export const MovieCardStyled = styled.figure`
  width: 265px;
  height: 430px;
  ${Media.Tablet} {
    max-width: 210px;
    max-height: 380px;
  }
  ${Media.Mobile} {
    max-width: 270px;
    max-height: 440px;
  }
`;

export const Image = styled.img`
  height: 360px;
  border-radius: 20px;
  margin-bottom: 15px;
  ${Media.Tablet} {
    width: 210px;
    height: 280px;
  }
  ${Media.Mobile} {
    margin-bottom: 20px;
    width: 275px;
    height: 365px;
  }
`;

export const TitleGgoup = styled.figcaption`
  color: ${Color.Primary_TEXT};
  ${typography.s2};
`;
// не работает стили, нужен а или link или h5?????
export const Link = styled.a`
  text-decoration: none;
  /* color: ${Color.Primary_TEXT};
  ${typography.s2}; */
  transition: 0.5s color ease-in-out;
  &:hover {
    color: ${Color.Green};
    cursor: pointer;
  }

  ${Media.Tablet} {
    color: ${Color.Green};
  }
`;
export const SubTitle = styled.p`
  ${Media.Tablet} {
    color: ${Color.Errors};
  }
`;
