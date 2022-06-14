import React from 'react';
import './App.css';
import MakeDropdown from './MakeDropdown';
import YearDropdown from './YearDropdown';
import TrimDropdown from './TrimDropdown';
import {CarProvider} from './CarContext';
import SubmitButton from './SubmitButton';

function App() {
  // const [makes, setMakes] = useState([]);

  // const options = {
  //   method: 'GET',
  //   url: 'https://vehapi.com/vehicle/makes/2022',
  //   // headers: {
  //   //   'X-RapidAPI-Key': '1e25ba540dmsh030c8793b201de6p1d469bjsn6d545a8c1532',
  //   //   'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  //   // }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  //   setMakes(response.data)
  // }).catch(function (error) {
  //   console.error(error);
  // });

  const makes = [{"make":"Acura"},{"make":"Audi"},{"make":"BMW"},{"make":"Buick"},{"make":"Cadillac"},{"make":"Chevrolet"},{"make":"Ford"},{"make":"Genesis"},{"make":"GMC"},{"make":"Honda"},{"make":"Hyundai"},{"make":"INFINITI"},{"make":"Kia"},{"make":"Land Rover"},{"make":"Lexus"},{"make":"MINI"},{"make":"Mitsubishi"},{"make":"Nissan"},{"make":"Porsche"},{"make":"RAM"},{"make":"Subaru"},{"make":"Toyota"},{"make":"Volkswagen"},{"make":"Volvo"}]

  return (
    <div className="App">
      <CarProvider>

      
      <header className="App-header">
        <YearDropdown />
        <MakeDropdown makes={makes} />
        <TrimDropdown />
        <SubmitButton/>
      </header>
      </CarProvider>
    </div>
  );
}

export default App;
