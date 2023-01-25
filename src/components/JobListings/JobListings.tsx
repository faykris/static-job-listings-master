import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import {State} from "../../redux/reducer";
import data from '../../data/data.json';
import Job from "../Job/Job";
import './JobListings.css';

export interface Data {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: Array<string>,
  tools: Array<string>
}

const JobListings: React.FC = () =>{

  const state = useSelector((state: State) => state.strings);
  const [items, setItems] = useState<Data[]>([]);

  useEffect(() => {
    if (state.length === 0) {
      setItems(data)
    } else {
      let filterItem: string[] = [];
      let totalItems: Data[] = [];
      let checker = (arr: Array<string>, target: Array<string>) => target.every(v => arr.includes(v));

      data.map((job) => {
        filterItem = [job.role, job.level].concat(job.languages, job.tools)

        if (checker(filterItem, state)) {
          totalItems = [...totalItems, job]
        }
        //no used returned value
        return job
      })

      setItems(totalItems)
    }
  }, [state]);
  
  return (
    <div className='JobListings'>
      {items.map((job: Data) => (
        <Job
          id={job.id} company={job.company} logo={job.logo}
          new={job.new} featured={job.featured} position={job.position}
          role={job.role} level={job.level} postedAt={job.postedAt}
          contract={job.contract} location={job.location} languages={job.languages}
          tools={job.tools} key={job.id}
        />
      ))}
    </div>
  );
}

export default JobListings;