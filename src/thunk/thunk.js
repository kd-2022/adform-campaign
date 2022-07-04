import { fetchUsers } from '../api/userApi';
import { getCampaignWithUser } from '../actions/campaignAction';

export const getCampaignList = (data) => {
    return async (dispatch) => {
      const userData = await fetchUsers();
      const listData = {
        campaignList: data,
        userList: userData
      };
    
      dispatch(getCampaignWithUser(listData));
    };
  };