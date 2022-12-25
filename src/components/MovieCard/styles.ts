import styled from "styled-components";
import { Color, Media, typography } from "../../ui";

export const MovieCardStyled = styled.li`
  /* max-width: 265px;
  max-height: 430px; */
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
  /* width: 100%; */
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

export const Title = styled.h5`
  color: ${Color.Primary_TEXT};
  ${typography.s2};
  transition: 0.5s color ease-in-out;
  &:hover {
    color: ${Color.Green};
    cursor: pointer;
  }

  ${Media.Tablet} {
    color: ${Color.Green};
  }
`;
export const SubTitle = styled.h6`
  color: ${Color.Primary_TEXT};
  ${typography.s3};

  ${Media.Tablet} {
    color: ${Color.Errors};
  }
`;
