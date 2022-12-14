import React from "react";
import { UserName, UserProfileIcon, UserProfileStyled } from "./styles";

interface IUserProfile {
  name: string;
  lastName: string;
}
export const UserProfile = ({ name, lastName }: IUserProfile) => {
  return (
    <UserProfileStyled>
      <UserProfileIcon />
      <UserName>
        {name} {lastName}
      </UserName>
    </UserProfileStyled>
  );
};
