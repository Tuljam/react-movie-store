import styled from "styled-components";
import { Color } from "../../ui";
import { Media } from "../../ui/media";

export const NavStyled = styled.nav`
  display: grid;
  gap: 40px;
  width: 98%;
  height: 30%;
  background-color: ${Color.Black};
`;

// export const Title = styled.h3`
//   color: ${Color.Primary_TEXT};
//   font-size: 26px;

//   ${Media.Tablet} {
//     color: ${Color.Green};
//   }
// `;
// export const SubTitle = styled.h4`
//   color: ${Color.Primary_TEXT};
//   font-size: 20px;

//   ${Media.Tablet} {
//     color: ${Color.Errors};
//   }
// `;
// export const Text = styled.p`
//   padding: 5px;
//   color: ${Color.Primary_light};
//   font-size: 20px;
// `;

export const NavLink = styled.a`
  display: grid;
  grid-template-columns: 40px 95px;
  text-decoration: none;
  padding-right: 105px;
`;
export const Text = styled.p`
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
  background-color: ${Color.Dark};
  color: ${Color.Secondary};
  width: 130px;
  height: 50px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${Color.Graphite};
    color: ${Color.Black};
  }
`;
