import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { ISingIn } from "types";
import { Input, Label, SettingUpFormStyled } from "./styles";

export const SettingUpForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<ISingIn>();

  return (
    <SettingUpFormStyled>
      <Label>name</Label>
      <Input {...register("name", {})} placeholder={"Enter your name"} />
      {errors.name && <span>{errors.name.message}</span>}
      <Label>email</Label>
      <Input
        {...register("email", {
          required: true,
        })}
        placeholder={"Enter your email"}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <Label>password</Label>
      <Input
        {...register("password", {
          required: true,
        })}
        placeholder={"Enter yYour password"}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <Label>confirm password</Label>
      <Input
        {...register("confirmPassword", {
          required: true,
        })}
        placeholder={"Confirm password"}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      <button type="submit">Sign up</button>
      <div>
        <span>
          Already have an account? <Link to={`${ROUTE.HOME}${ROUTE.SIGN_IN}`}>Sign In</Link>
        </span>
      </div>
    </SettingUpFormStyled>
  );
};
