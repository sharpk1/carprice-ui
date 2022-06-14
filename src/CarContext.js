import {createContext, useState} from 'react';

const CarContext = createContext();

export function CarProvider({children}){
    const [year, setYear] = useState(1);

    const addToYear = (year) => {
        setYear(year);
    }
    return (
        <CarContext.Provider value={{year, addToYear}}>
            {children}
        </CarContext.Provider>
    )
}

export default CarContext;
