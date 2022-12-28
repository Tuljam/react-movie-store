import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setKeyword } from "store/feature/searchSlice/searchSlice";

import { SearchStyled } from "./styles";

export const Search = () => {
  const dispatch = useDispatch();
  const onChange = (keyword: string) => {
    dispatch(setKeyword(keyword));
  };
  return (
    <SearchStyled
      onChange={(event) => {
        onChange(event.target.value);
      }}
      type="search"
      placeholder="Search"
    />
  );
};
