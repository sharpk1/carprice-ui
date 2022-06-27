import React, { useContext } from "react";
import CarContext from "./CarContext";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const SubmitButton = () => {
  const { year, trim, make, model } = useContext(CarContext);

  const handleSearch = () => {
    console.log(year, make, model, trim);
  };

  return (
    <Button variant="contained" component={Link} to="/results" onClick={handleSearch}>
      Search
    </Button>
  );
};

export default SubmitButton;