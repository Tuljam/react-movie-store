import styled from "styled-components";
import { Color } from "../../ui";

export const NavStyled = styled.nav`
  display: grid;
  gap: 40px;
  width: 98%;
  height: 30%;
  background-color: ${Color.Black};
`;

// export const Link = styled.a`
//   display: grid;
//   grid-template-columns: 40px 95px;
//   text-decoration: none;
//   padding-right: 105px;
// `;

export const Subtitle = styled.h5`
  padding: 5px;
  color: ${Color.Secondary};
  font-size: 20px;
  text-align: start;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${Color.Primary};
  }
`;

export const ButtonTheme = styled.button`
  padding: 1.25rem 1.75rem;
  background-color: ${Color.Dark};
  color: ${Color.Secondary};
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${Color.Graphite};
    color: ${Color.Black};
  }
`;
