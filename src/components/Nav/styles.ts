import styled from "styled-components";
import { Color } from "../../ui";

export const NavStyled = styled.nav`
  display: grid;
  grid-template-rows: repeat (5, 1fr);
  gap: 40px;
  width: 98%;
  height: 30%;
  background-color: ${Color.Black};
`;

// export const Subtitle = styled.h5`
//   padding: 5px;
//   color: ${Color.Secondary};
//   font-size: 20px;
//   text-align: start;
//   transition: all 0.5s ease-in-out;

//   &:hover {
//     color: ${Color.Primary};
//   }
// `;

export const ButtonTheme = styled.button`
  padding: 1.25rem 1.75rem;
  border-radius: 10px;
  background-color: ${Color.Dark};
  color: ${Color.Secondary};

  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${Color.Graphite};
    color: ${Color.Black};
  }
`;
