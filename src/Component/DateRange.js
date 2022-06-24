import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  search_Campaign_By_Date,
  display_Loader,
} from "../Campaign/campaignAction";
import { useDispatch, useSelector } from "react-redux";

const DateRange = () => {

  const state = useSelector((data) => data);
  useEffect(() =>{
    if(state.startDate || state.endDate){
      setStartDate(state.startDate);
      setEndDate(state.endDate);
    }
  },[state.startDate, state.endDate])

  
  const [startDate, setStartDate] = useState(state.startDate);
  const [endDate, setEndDate] = useState(state.endDate);
  const dispatch = useDispatch();
  
  const handleStartDate = (date) => {
    setStartDate(date);
    let searchDate = {
      startDate: date,
      endDate: endDate,
    };
    dispatch(display_Loader(true));
    dispatch(search_Campaign_By_Date(searchDate));
  };

  const handleEndDate = (date) => {
    setEndDate(date);
    let searchDate = {
      startDate: startDate,
      endDate: date,
    };
    dispatch(display_Loader(true));
    dispatch(search_Campaign_By_Date(searchDate));
  };

  return (
    <>
      <div className="dateRange">
        <DatePicker
          selected={startDate}
          onChange={handleStartDate}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onKeyDown={(e) => {
            e.preventDefault();
         }}
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDate}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          minDate={startDate}
          onKeyDown={(e) => {
            e.preventDefault();
         }}
        />
      </div>
    </>
  );
};

export default DateRange;
