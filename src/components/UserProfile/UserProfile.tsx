import { UserName, UserProfileIcon, UserProfileStyled } from "./styles";

interface IUserProfile {
  name: string;
  lastName: string;
}
export const UserProfile = ({ name, lastName }: IUserProfile) => {
  return (
    <UserProfileStyled>
      <UserProfileIcon>
        {" "}
        {name[0]}
        {lastName[0]}
      </UserProfileIcon>
      <UserName>
        {name} {lastName}
      </UserName>
    </UserProfileStyled>
  );
};
