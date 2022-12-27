import { Button } from "components";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "router";
import { loginByUser, useTypedDispatch, useTypedSelector } from "store";

import {
  CustomLink,
  Input,
  InputGroup,
  Label,
  Title,
  Refer,
  SignInFormStyled,
  ErrorMessage,
} from "./styles";

interface ISignInForm {
  email: string;
  password: string;
}
export const SignInForm = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const errorServer = useTypedSelector((state) => state.user.error);
  const isAuth = useTypedSelector((state) => state.user.isAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>();

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE.HOME);
    }
  }, [isAuth, navigate]);

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    dispatch(loginByUser(data));
    reset();
  };

  return (
    <SignInFormStyled onSubmit={handleSubmit(onSubmit)}>
      {errorServer && <span className={"server-errors"}>{errorServer}</span>}
      <Title> Sign In </Title>
      <InputGroup>
        <Label>Email</Label>
        <Input
          {...register("email", {
            required: "Email is required field.",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Enter correct Email!",
            },
          })}
          type="text"
          placeholder="Your email"
        />
        <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>

        <Label> Password</Label>
        <Input
          {...register("password", {
            required: "Password is required field.",
            minLength: {
              value: 5,
              message: "You must enter at least 5 characters!",
            },
          })}
          type="password"
          placeholder="Your password"
        />
        <ErrorMessage>{errors.password && errors.password.message}</ErrorMessage>
        <CustomLink to="/">Foggot password?</CustomLink>
      </InputGroup>
      <Button type="submit">Sign in</Button>

      {/* как ему добавить стиль, чтобы разместить по центру??????? */}
      <CustomLink to="/">
        Don’t have an account? <Refer href="/">Sign Up</Refer>{" "}
      </CustomLink>
    </SignInFormStyled>
  );
};
