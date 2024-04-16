import React from "react";
import { useParams } from "react-router-dom";

const Incomes = () => {
  const { bID } = useParams();
  return <h1>Incomes / {bID}</h1>;
};

export default Incomes;
