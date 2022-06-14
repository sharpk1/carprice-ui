import React, {useContext} from 'react';
import CarContext from './CarContext';

const SubmitButton = () => {

    const { year } = useContext(CarContext);

    const handleSearch = () => {
        console.log(year);
    }


    return (
        <button onClick={handleSearch}>Search</button>
    )
}

export default SubmitButton;