import React from "react";
import YearDropdown from './YearDropdown';
import MakeDropdown from './MakeDropdown';
import TrimDropdown from './TrimDropdown';
import SubmitButton from './SubmitButton';
import ModelDropdown from './ModelDropdown';


const SearchPage = () => {
    const makes = [{"make":"Acura"},{"make":"Audi"},{"make":"BMW"},{"make":"Buick"},{"make":"Cadillac"},{"make":"Chevrolet"},{"make":"Ford"},{"make":"Genesis"},{"make":"GMC"},{"make":"Honda"},{"make":"Hyundai"},{"make":"INFINITI"},{"make":"Kia"},{"make":"Land Rover"},{"make":"Lexus"},{"make":"MINI"},{"make":"Mitsubishi"},{"make":"Nissan"},{"make":"Porsche"},{"make":"RAM"},{"make":"Subaru"},{"make":"Toyota"},{"make":"Volkswagen"},{"make":"Volvo"}]
    return (
        <>
        <YearDropdown/>
        <MakeDropdown makes={makes} />
        <ModelDropdown makes={makes} />
        <TrimDropdown />
        <SubmitButton/>
        </>
        
    )
}

export default SearchPage;