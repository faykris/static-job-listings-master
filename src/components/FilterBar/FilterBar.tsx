import React from 'react';
import { ReactSVG } from "react-svg";
import { useSelector, useDispatch } from 'react-redux';
import { State } from "../../redux/reducer";
import { deleteStringAction, clearStringsAction } from "../../redux/actions";
import './FIlterBar.css';


const FilterBar = () => {
  const state = useSelector((state: State) => state.strings);
  const dispatch = useDispatch();

  const deleteString = (string:string) => {
    dispatch(deleteStringAction(string))
  }
  const clearStrings = () => {
    dispatch(clearStringsAction())
  }

  return (
    <div className='FilterBar'>
      <div className='filterList'>
        {state.map((item,i) => (
          <div className='filterItem' key={item}>
            <button className='item-text' >
              {item}
            </button>
            <button className='item-delete' onClick={(e) => {deleteString(item)}}>
              <ReactSVG src='images/icon-remove.svg' />
            </button>
          </div>
        ))}
      </div>
      <div className='filterClear'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={clearStrings} >Clear</a>
      </div>
    </div>
  );
}

export default FilterBar;