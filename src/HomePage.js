import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  //howdy commit
  return (
    <>
      <Button variant="contained" component={Link} to="/search">
        Search
      </Button>
      <Button variant="contained">Submi</Button>
    </>
  );
};

export default HomePage;
