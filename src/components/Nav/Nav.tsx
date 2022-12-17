import { NavLink } from "components/NavLink/NavLink";
import { useSelector } from "react-redux";
import { NavStyled } from "./styles";

export const Nav = () => {
  const { name, email, isAuth } = useSelector((state: any) => state.user);
  return (
    // <NavStyled>
    //   <Title>Имя:{name}</Title>
    //   <SubTitle>Email: {email}</SubTitle>
    //   <Text>{isAuth ? <span>Logged</span> : <span>Not logged in</span>}</Text>
    // </NavStyled>

    <NavStyled>
      <NavLink />
    </NavStyled>
  );
};
