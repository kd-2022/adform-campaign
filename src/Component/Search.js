import { useDispatch } from "react-redux";
import { useState } from "react";
import { search_Campaign_By_Name, display_Loader } from "../Campaign/campaignAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Search = () => {

  const [input,setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(display_Loader(true));
    dispatch(search_Campaign_By_Name(e.target.value));
    setInput(e.target.value);
  };

  const handleClick = () =>{
    //dispatch(search_Campaign_By_Name(input));
  }

  return (
    <>
    <div className="searchBox">
      <div>
        <input placeholder="Search By Name" type="text" onChange={handleChange} />
      </div>
      <div className="searchIcon">
        <FontAwesomeIcon onClick={handleClick} icon={faMagnifyingGlass} />
      </div>
    </div>
    </>
  );
};

export default Search;
