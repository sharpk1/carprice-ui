import React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Button variant="contained" component={Link} to="/search">Search</Button>
      <Button variant="contained">Submittt</Button>
    </>
  );
};

export default HomePage;
