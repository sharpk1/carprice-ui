import React, {useState, useContext} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CarContext from './CarContext';

const TrimDropdown = () => {

    const [age, setAge] = React.useState('');
    const [trims, setTrims] = useState([]);

    const { year } = useContext(CarContext);

    const handleChange = (event) => {
      console.log(year);
        setAge(event.target.value);
      };
  
    return (<Box sx={{ minWidth: 130 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Trim</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Trim"
            onChange={handleChange}
          >
            {trims.map((make) => {
                return <MenuItem value={make}>{make}</MenuItem>
            })}
            
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>)
}

export default TrimDropdown;