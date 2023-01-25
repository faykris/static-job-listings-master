import React from 'react';
import { useDispatch } from 'react-redux';
import { addStringAction } from '../../redux/actions';
import {Data} from "../JobListings/JobListings";
import './Job.css';

const Job: React.FC<Data> = (data) =>  {
  const dispatch = useDispatch();
  const items = [data.role, data.level].concat(data.languages, data.tools);

  const addString = (string:string) => {
    dispatch(addStringAction(string))
  }

  return (
      <div className={`Job ${data.featured && 'featured'}`}>
        <div className='image'>
          <img src={data.logo} alt='Company logo' />
        </div>
        <div className='info'>
          <div className='company'>
            <p>{data.company}</p>
            {data.new &&
              <button className='new'>new!</button>
            }
            {data.featured &&
              <button className='featured'>featured</button>
            }
          </div>
          <div className='position'>
            <p>{data.position}</p>
          </div>
          <div className='more'>
            <p>{data.postedAt}</p><p> · </p>
            <p>{data.contract}</p><p> · </p><p>
            {data.location}</p>
          </div>
        </div>
        <div className='items'>
          {items.map((item) => (
            <button key={item} className='item-btn other' onClick={() => addString(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    );
}

export default Job;
