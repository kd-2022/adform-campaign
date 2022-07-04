import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  searchCampaignByDate,
  displayLoader,
} from '../../actions/campaignAction';
import { useDispatch, useSelector } from 'react-redux';

const DateFilter = () => {

  const state = useSelector((data) => data);
  const dispatch = useDispatch();

  const handleStartDate = (date) => {
    const searchDate = {
      startDate: date,
      endDate: state.endDate,
    };
    dispatch(displayLoader(true));
    dispatch(searchCampaignByDate(searchDate));
  };

  const handleEndDate = (date) => {
    const searchDate = {
      startDate: state.startDate,
      endDate: date,
    };
    dispatch(displayLoader(true));
    dispatch(searchCampaignByDate(searchDate));
  };

  return (
    <>
      <div className='dateRange'>
        <DatePicker
          selected={ state.startDate }
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
          selected={ state.endDate }
          onChange={ handleEndDate }
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode='select'
          minDate={ state.startDate }
          onKeyDown={ (e) => {
            e.preventDefault();
         } }
        />
      </div>
    </>
  );
};

export default DateFilter;
