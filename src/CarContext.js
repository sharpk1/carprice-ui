import {createContext, useState} from 'react';

const CarContext = createContext();

export function CarProvider({children}){
    const [year, setYear] = useState(1);
    const [make, setMake] = useState(1);
    const [model, setModel] = useState(1);
    const [trim, setTrim] = useState(1);

    const addToYear = (year) => {
        setYear(year);
    };

    const addToMake = (make) => {
        setMake(make);
    };
    
    const addToModel = (model) => {
        setModel(model);
    }

    const addToTrim = (trim) => {
        setTrim(trim)
    }

    return (
        <CarContext.Provider value={{year, make, model, trim, addToMake, addToModel, addToTrim,  addToYear}}>
            {children}
        </CarContext.Provider>
    )
}

export default CarContext;
