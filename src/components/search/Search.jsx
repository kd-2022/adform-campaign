import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { searchCampaignByName, displayLoader } from '../../actions/campaignAction';

const Search = () => {

  const [ input,setInput ] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(displayLoader(true));
    dispatch(searchCampaignByName(e.target.value));
    setInput(e.target.value);
  };

  const handleClick = () =>{
    dispatch(searchCampaignByName(input));
  }

  return (
    <>
    <div className='searchBox'>
      <div>
        <input placeholder='Search By Name' type='text' onChange={ handleChange } />
      </div>
      <div className='searchIcon'>
        <FontAwesomeIcon onClick={ handleClick } icon={ faMagnifyingGlass } />
      </div>
    </div>
    </>
  );
};

export default Search;
