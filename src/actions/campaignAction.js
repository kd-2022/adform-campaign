import {
  GET_CAMPAIGN_WITH_USER,
  SEARCH_CAMPAIGN_BY_NAME,
  SEARCH_CAMPAIGN_BY_DATE,
  DISPLAY_LOADER,
} from "../types/campaignType";
import { fetchUsers } from "../api/userApi";

export const get_Campaign_With_User = (data) => {
  return {
    type: GET_CAMPAIGN_WITH_USER,
    payload: data,
  };
};

export const get_Campaign_List = (data) => {
  return async (dispatch) => {
    let userData = await fetchUsers();
    let listData = {
      campaignList: data,
      userList: userData,
    };
    dispatch(get_Campaign_With_User(listData));
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
