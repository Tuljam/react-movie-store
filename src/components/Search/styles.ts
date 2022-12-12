import styled from "styled-components";
import { Color } from "../../ui/colors";

export const SearchStyled = styled.input`
  padding: 15px;
  padding-left: 20px;
  background-color: ${Color.Graphite};
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  color: ${Color.Primary_TEXT};
  &::placeholder {
    color: ${Color.Secondary};
  }
  &:focus {
    cursor: pointer;
  }
`;
