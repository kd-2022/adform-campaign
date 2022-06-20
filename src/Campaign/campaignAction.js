import {
  GET_CAMPAIGN,
  SEARCH_CAMPAIGN_BY_NAME,
  SEARCH_CAMPAIGN_BY_DATE,
  DISPLAY_LOADER,
} from "./campaignType";
import axios from "axios";

export const get_Campaign = (data) => {
  return {
    type: GET_CAMPAIGN,
    payload: data,
  };
};

export const fetch_user = (data) => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {  
          const userList = response.data
        let campaignData = {
            campaignList : data,
            userList : userList
        }  
        
        dispatch(get_Campaign(campaignData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const search_Campaign_By_Name = (search) => {
  return {
    type: SEARCH_CAMPAIGN_BY_NAME,
    payload: search,
  };
};

export const search_Campaign_By_Date = (date) => {
  return {
    type: SEARCH_CAMPAIGN_BY_DATE,
    payload: date,
  };
};

export const display_Loader = (status) => {
  return {
    type: DISPLAY_LOADER,
    payload: status,
  };
};
