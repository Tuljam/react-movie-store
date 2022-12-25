import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Button } from "./styles";

export const DetailsMovie = () => {
  const navigate = useNavigate();
  const params = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  return <Button onClick={handleBack}>BACK</Button>;
};
