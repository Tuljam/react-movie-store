import { Title } from "components";
import { useForm } from "react-hook-form";
import { FormStyled, Input, InputGroup, Label } from "./styles";

export const SignInForm = () => {
  const { register, watch } = useForm();
  watch((data) => console.log(data));

  return (
    <FormStyled>
      <h3> Sign In </h3>
      <InputGroup>
        <Label>Email</Label>
        <Input {...register("Email")} />

        <Label> Password</Label>
        <Input {...register("Password")} />
      </InputGroup>
      <button type="submit">sign in</button>
    </FormStyled>
  );
};
