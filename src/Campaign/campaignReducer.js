import {
  GET_CAMPAIGN,
  SEARCH_CAMPAIGN_BY_NAME,
  SEARCH_CAMPAIGN_BY_DATE,
  DISPLAY_LOADER,
} from "./campaignType";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

let initialState = {
  loader: false,
  campaignList: []
};
const updatedList = {
  loader: false,
  campaignList: [],
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPAIGN:
      updatedList.campaignList.length = 0;
      const newCampgainList = action.payload.campaignList.map((item) => {
        var user_details = action.payload.userList.find(
          (user) => user.id === item.userId
        );
        let newUserDetails;
        if (user_details != null && user_details.name != null) {
          newUserDetails = { ...item, userName: user_details.name };
        } else {
          newUserDetails = { ...item, userName: "Unknown User" };
        }
        updatedList.campaignList.push(newUserDetails);
        return newUserDetails;
      });
      return {
        ...updatedList,
        campaignList: newCampgainList,
        loader: false
      };

    case SEARCH_CAMPAIGN_BY_NAME:
      const search_results = updatedList.campaignList.filter((item) => {
        return item.name.toLowerCase().includes(action.payload);
      });

      return {
        ...updatedList,
        campaignList: search_results,
        loader: false
      };
    case SEARCH_CAMPAIGN_BY_DATE:
      const search_by_date_results = updatedList.campaignList.filter((item) => {

        var startD = String(action.payload.startDate.getDate()).padStart(2,"0");
        var startM = String(action.payload.startDate.getMonth() + 1).padStart(2,"0");
        var startY = action.payload.startDate.getFullYear();
        

        var endD = String(action.payload.endDate.getDate()).padStart(2, "0");
        var endM = String(action.payload.endDate.getMonth() + 1).padStart(2,"0");
        var endY = action.payload.endDate.getFullYear();
        
        const [monthS, dayS, yearS] = item.startDate.split('/');
        const [monthE, dayE, yearE] = item.endDate.split('/');
        
        const startDate = new Date(+yearS, monthS - 1, +dayS);
        const endDate = new Date(+yearE, monthE - 1, +dayE);
        
        const selected_startDate = new Date(+startY, startM - 1, +startD);
        const selected_endDate = new Date(+endY, endM - 1, +endD);
        const range = moment().range(selected_startDate, selected_endDate);
        const start_range = range.contains(startDate);
        const end_range = range.contains(endDate);

        if (start_range == true || end_range == true) {
          return true;
        }
      });
      
      return {
        ...updatedList,
        campaignList: search_by_date_results,
        loader: false
      };
    case DISPLAY_LOADER:
      return {
        ...updatedList,
        loader: action.payload,
      };

    default:
      return state;
  }
};
export default campaignReducer;
