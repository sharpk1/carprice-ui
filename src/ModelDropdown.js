import React, {useContext} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CarContext from './CarContext';

const ModelDropdown = (props) => {
    const [age, setAge] = React.useState('');
    const {makes} = props;

    const { addToModel } = useContext(CarContext);

    const handleChange = (event) => {
      setAge(event.target.value);
      addToModel(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 130 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Model"
            onChange={handleChange}
          >
            {/* {makes.map((make) => {
                return <MenuItem value={make.make}>{make.make}</MenuItem>
            })} */}
            
            <MenuItem value={"4runner"}>4Runner</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </Box>
    );
}

export default ModelDropdown;