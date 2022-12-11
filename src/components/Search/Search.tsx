import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setUserName } from "../../store/slices/userSlice";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const Search = ({ onChange, value }: IProps) => {
  const dispatch = useDispatch();
  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(event.target.value));
  };
  return (
    <input
      onChange={handleName}
      type="text"
      // placeholder="Search"
      // value={value}
    />
  );
};
