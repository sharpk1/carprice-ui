import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CarContext from './CarContext';

const YearDropdown = () => {
  // get the current year and go back 20 years.
  const [age, setAge] = React.useState("");
  const [carYears, setCarYears] = useState([]);

  const { addToYear } = useContext(CarContext);

  const getYears = () => {
    let currentYear = new Date().getFullYear();
    let years = [];
    years.push(currentYear);
    for (let i = 0; i < 20; i++) {
      currentYear--;
      years.push(currentYear);
    }
    setCarYears(years);
  };

  useEffect(() => {
    getYears();
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
    addToYear(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Year"
          onChange={handleChange}
        >
          {carYears.map((year) => {
            return <MenuItem value={year}>{year}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default YearDropdown;
