import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CarContext from "./CarContext";

const TrimDropdown = () => {
  const [age, setAge] = React.useState("");

  const { addToTrim } = useContext(CarContext);

  const handleChange = (event) => {
    addToTrim(event.target.value);
    setAge(event.target.value);
    // comment
  };

  return (
    <Box sx={{ minWidth: 130 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Trim</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Trim"
          onChange={handleChange}
        >
          <MenuItem value={20}>SR5 Premium 4WD</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TrimDropdown;
