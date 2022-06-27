import React, { Fragment } from "react";
import "./App.css";
import { CarProvider } from "./CarContext";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import ResultsPage from "./ResultsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CarProvider>
          <Router>
            <Fragment>
              <Routes>
                <Route exact path="/" element={<HomePage />}>
                  {/* <Route exact path='/search' element={<Home/>}/> */}
                </Route>
                <Route exact path="/search" element={<SearchPage />} />
                <Route exact path="/results" element={<ResultsPage />} />
                {/* <Route exact path='/login' element={<Login/>}/> */}
              </Routes>
            </Fragment>
          </Router>
        </CarProvider>
      </header>
    </div>
  );
}

export default App;
