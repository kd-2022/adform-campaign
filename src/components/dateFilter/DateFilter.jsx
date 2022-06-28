import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  searchCampaignByDate,
  displayLoader,
} from '../../actions/campaignAction';
import { useDispatch, useSelector } from 'react-redux';

const DateFilter = () => {

  const state = useSelector((data) => data);
  const [ startDate, setStartDate ] = useState(state.startDate);
  const [ endDate, setEndDate ] = useState(state.endDate);
  const dispatch = useDispatch();

  useEffect(() =>{
    if(state.startDate || state.endDate){
      setStartDate(state.startDate);
      setEndDate(state.endDate);
    }
  },[ state.startDate, state.endDate ])
  
  const handleStartDate = (date) => {
    setStartDate(date);
    const searchDate = {
      startDate: date,
      endDate: endDate,
    };
    dispatch(displayLoader(true));
    dispatch(searchCampaignByDate(searchDate));
  };

  const handleEndDate = (date) => {
    setEndDate(date);
    const searchDate = {
      startDate: startDate,
      endDate: date,
    };
    dispatch(displayLoader(true));
    dispatch(searchCampaignByDate(searchDate));
  };

  return (
    <>
      <div className='dateRange'>
        <DatePicker
          selected={ startDate }
          onChange={ handleStartDate }
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode='select'
          onKeyDown={ (e) => {
            e.preventDefault();
         } }
        />
        <DatePicker
          selected={ endDate }
          onChange={ handleEndDate }
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode='select'
          minDate={ startDate }
          onKeyDown={ (e) => {
            e.preventDefault();
         } }
        />
      </div>
    </>
  );
};

export default DateFilter;
