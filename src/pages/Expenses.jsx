import { useParams } from "react-router-dom";

const Expenses = () => {
  const { aID } = useParams();
  return <h1>Expenses / {aID}</h1>;
};

export default Expenses;
