import {GET_CAMPAIGN_WITH_USER, SEARCH_CAMPAIGN_BY_NAME, SEARCH_CAMPAIGN_BY_DATE, DISPLAY_LOADER,} from "../../src/types/campaignType";
import { get_Campaign_With_User, search_Campaign_By_Date,search_Campaign_By_Name } from "../utils/utils";


let initialState = {
  loader: false,
  campaignList: [],
  startDate: new Date(),
  endDate: new Date(),
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPAIGN_WITH_USER:
      let newCampgainList = get_Campaign_With_User(action);
      initialState.campaignList.length = 0;
      initialState.campaignList.push(...newCampgainList);
      return { ...initialState, campaignList: newCampgainList, loader: false, startDate: new Date(), endDate: new Date() };

    case SEARCH_CAMPAIGN_BY_NAME:
      let search_results = search_Campaign_By_Name(initialState, action);
      return { ...initialState, campaignList: search_results, loader: false };

    case SEARCH_CAMPAIGN_BY_DATE:
      let search_by_date_results = search_Campaign_By_Date(initialState, action);
      return {...initialState, campaignList: search_by_date_results, loader: false, startDate: action.payload.startDate, endDate: action.payload.endDate};
   
      case DISPLAY_LOADER:
      return {...initialState,loader: action.payload};

    default:
      return state;
  }
};
export default campaignReducer;
