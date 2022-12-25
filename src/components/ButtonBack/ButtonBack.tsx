import { useNavigate } from "react-router";
import { ButtonStyled } from "./styles";

export const ButtonBack = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return <ButtonStyled onClick={handleBack}>BACK</ButtonStyled>;
};
