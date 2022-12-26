import styled from "styled-components";
import { Color, Media, typography } from "ui";
import { Link } from "react-router-dom";

export const FormStyled = styled.form`
  background: url("../../assets/images/bg-SignUp.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 40px;
  padding: 60px;
  border-radius: 10px;
  color: ${Color.White};

  ${Media.Mobile} {
    padding: 25px;
    gap: 30px;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  ${Media.Mobile} {
    gap: 20px;
  }
`;

export const Input = styled.input`
  padding: 15px;
  background-color: ${Color.Secondary};
  border: 2px solid transparent;
  border-radius: 10px;
  color: ${Color.Primary_TEXT};
  &::placeholder {
    color: ${Color.White};
  }
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${Color.Secondary};
    &::placeholder {
      color: ${Color.Light};
    }
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${typography.s2};
  color: ${Color.Primary_TEXT};
`;

export const Title = styled.h2`
  padding: 10px 0;
  ${typography.h2};
  color: ${Color.Primary_TEXT};
`;

export const CustomLink = styled(Link)`
  ${typography.b};
  color: ${Color.Secondary};
  text-decoration: none;
`;

export const Error = styled.span`
  ${typography.b};
  color: ${Color.Errors};
`;
export const Refer = styled.a`
  ${typography.b};
`;
