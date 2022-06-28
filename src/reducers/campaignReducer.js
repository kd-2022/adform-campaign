import { GET_CAMPAIGN_WITH_USER, SEARCH_CAMPAIGN_BY_NAME, SEARCH_CAMPAIGN_BY_DATE, DISPLAY_LOADER } from '../../src/types/campaignType';
import { getCampaignWithUser, searchCampaignByDate,searchCampaignByName } from '../utils/utils';

const initialState = {
  loader: false,
  campaignList: [],
  startDate: new Date(),
  endDate: new Date(),
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPAIGN_WITH_USER: {
      const newCampgainList = getCampaignWithUser(action);
      initialState.campaignList.length = 0;
      initialState.campaignList.push(...newCampgainList);
      return { ...initialState, campaignList: newCampgainList, loader: false, startDate: new Date(), endDate: new Date() };
    }
    case SEARCH_CAMPAIGN_BY_NAME: {
      const searchResults = searchCampaignByName(initialState, action);
      return { ...initialState, campaignList: searchResults, loader: false };
    }
    case SEARCH_CAMPAIGN_BY_DATE: {
      const searchByDateResults = searchCampaignByDate(initialState, action);
      return { ...initialState, campaignList: searchByDateResults, loader: false, startDate: action.payload.startDate, endDate: action.payload.endDate };
    }
      case DISPLAY_LOADER:
      return { ...initialState,loader: action.payload };

    default:
      return state;
  }
};
export default campaignReducer;
