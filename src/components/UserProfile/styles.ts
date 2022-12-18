import styled from "styled-components";
import { Color, Media, typography } from "../../ui";

export const UserProfileStyled = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  gap: 20px;
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
  ${typography.h3};
  padding: 15px;
  border-radius: 10px;
  background-color: ${Color.Primary};
`;

export const UserName = styled.p`
  align-self: center;
  ${typography.b};
  color: ${Color.Primary_TEXT};

  ${Media.Tablet} {
    color: ${Color.Errors};
  }
`;
