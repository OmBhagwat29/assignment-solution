import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Chart from "./Components/chart/Chart";
import RegistrationContainer from "./Components/Registration/Registration-Container/RegistrationContainer";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <RegistrationContainer />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
