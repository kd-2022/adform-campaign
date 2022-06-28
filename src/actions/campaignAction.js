import {
  GET_CAMPAIGN_WITH_USER,
  SEARCH_CAMPAIGN_BY_NAME,
  SEARCH_CAMPAIGN_BY_DATE,
  DISPLAY_LOADER,
} from '../types/campaignType';
import { fetchUsers } from '../api/userApi';

export const getCampaignWithUser = (data) => {
  return {
    type: GET_CAMPAIGN_WITH_USER,
    payload: data,
  };
};

export const getCampaignList = (data) => {
  return async (dispatch) => {
    const userData = await fetchUsers();
    const listData = {
      campaignList: data,
      userList: userData,
    };
    dispatch(getCampaignWithUser(listData));
  };
};

export const searchCampaignByName = (search) => {
  return {
    type: SEARCH_CAMPAIGN_BY_NAME,
    payload: search,
  };
};

export const searchCampaignByDate = (date) => {
  return {
    type: SEARCH_CAMPAIGN_BY_DATE,
    payload: date,
  };
};

export const displayLoader = (status) => {
  return {
    type: DISPLAY_LOADER,
    payload: status,
  };
};
