import React, { useContext } from "react";
import CarContext from "./CarContext";
import Button from "@mui/material/Button";

const SubmitButton = () => {
  const { year, trim, make, model } = useContext(CarContext);

  const handleSearch = () => {
    console.log(year, make, model, trim);
  };

  return (
    <Button variant="contained" onClick={handleSearch}>
      Search
    </Button>
  );
};

export default SubmitButton;