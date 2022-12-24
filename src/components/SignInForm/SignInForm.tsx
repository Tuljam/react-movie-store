import { Button } from "components";
import { useForm, SubmitHandler } from "react-hook-form";
import { CustomLink, FormStyled, Input, InputGroup, Label, Error, Title, Refer } from "./styles";

interface ISingIn {
  Email: string;
  Password: string;
}
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ISingIn>();
  // watch((data) => console.log(data));
  const onSubmit: SubmitHandler<ISingIn> = (data) => {
    return data;
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Title> Sign In </Title>
      <InputGroup>
        <Label>Email</Label>
        <Input
          {...register("Email", {
            required: "Email is required field.",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Enter correct Email!",
            },
          })}
          type="text"
          placeholder="Your email"
        />
        <Error>{errors.Email && errors.Email.message}</Error>

        <Label> Password</Label>
        <Input
          {...register("Password", {
            required: "Password is required field.",
            minLength: {
              value: 5,
              message: "You must enter at least 5 characters!",
            },
          })}
          type="password"
          placeholder="Your password"
        />
        <Error>{errors.Password && errors.Password.message}</Error>
        <CustomLink to="/">Foggot password?</CustomLink>
      </InputGroup>
      <Button type="submit">Sign in</Button>

      {/* как ему добавить стиль, чтобы разместить по центру??????? */}
      <CustomLink to="/">
        Don’t have an account? <Refer href="/">Sign Up</Refer>{" "}
      </CustomLink>
    </FormStyled>
  );
};
