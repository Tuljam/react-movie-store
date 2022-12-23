import styled from "styled-components";
import { Color, Media, typography } from "../../ui";

export const UserProfileStyled = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  align-items: center;
  text-align: center;
  color: ${Color.White};
  ${Media.Mobile} {
    display: none;
  }
  ${Media.Tablet} {
    display: none;
  }
`;

export const UserProfileIcon = styled.div`
  padding: 15px;
  border-radius: 10px;
  ${typography.h3};
  background-color: ${Color.Primary};
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${Color.Graphite};
    color: ${Color.Black};
  }
`;

export const UserName = styled.p`
  width: 50%;
  align-self: center;
  ${typography.b};
  color: ${Color.Primary_TEXT};

  ${Media.Tablet} {
    color: ${Color.Errors};
  }
`;
