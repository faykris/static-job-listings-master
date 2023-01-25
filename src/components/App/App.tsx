import React from 'react';
import { useSelector } from 'react-redux';
import {State} from "../../redux/reducer";
import './App.css';
import JobListings from "../JobListings/JobListings";
import FilterBar from "../FilterBar/FilterBar";
import Footer from "../Footer/Footer";


function App() {
  const state = useSelector((state: State) => state.strings);

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className='App-filter'>
        {state.length > 0 &&
        <FilterBar />
        }
      </div>
      <JobListings />
      <Footer />
    </div>
  );
}

export default App;
