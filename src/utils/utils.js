import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);



export const get_Campaign_With_User = (action) => {
  if (action.payload.campaignList != null && action.payload.campaignList.length > 0) 
  {
    let newCampgainList = action.payload.campaignList.map((item) => {
      var user_details = action.payload.userList.find(
        (user) => user.id === item.userId
      );
      let newUserDetails;
      if (user_details != null && user_details.name != null) {
        newUserDetails = { ...item, userName: user_details.name };
      } else {
        newUserDetails = { ...item, userName: "Unknown User" };
      }
      return newUserDetails;
    });
    return newCampgainList;
  } else {
    let newCampgainList = [];
    return newCampgainList;
  }
};

export const search_Campaign_By_Date = (initialState,action) => {
    const search_by_date_results = initialState.campaignList.filter((item) => {

        const [startM, startD, startY] = moment(action.payload.startDate).format("MM/DD/YYYY").split('/');
        const [endM, endD, endY] = moment(action.payload.endDate).format("MM/DD/YYYY").split('/');

        const [monthS, dayS, yearS] = item.startDate.split('/');
        const [monthE, dayE, yearE] = item.endDate.split('/');
        
        const startDate = new Date(+yearS, monthS - 1, +dayS);
        const endDate = new Date(+yearE, monthE - 1, +dayE);
        
        const selected_startDate = new Date(+startY, startM - 1, +startD);
        const selected_endDate = new Date(+endY, endM - 1, +endD);
        const range = moment().range(selected_startDate, selected_endDate);
        const start_range = range.contains(startDate);
        const end_range = range.contains(endDate);

        if (start_range === true || end_range === true) {
          return true;
        }
        else{
            return false;
        }
      });
      return search_by_date_results;
}

export const search_Campaign_By_Name = (initialState,action) => {
    const search_results = initialState.campaignList.filter((item) => {
        return item.name.toLowerCase().includes(action.payload);
      });
      return search_results;
}

export const get_Campaign_Status = (props) => {
  let status = false;  
  let [mm, dd, yyyy] = moment(new Date()).format("MM/DD/YYYY").split('/');
  
  const [monthS, dayS, yearS] = props.item.startDate.split("/");
  const [monthE, dayE, yearE] = props.item.endDate.split("/");

  const startDate = new Date(+yearS, monthS - 1, +dayS);
  const endDate = new Date(+yearE, monthE - 1, +dayE);
  const today_Date = new Date(+yyyy, mm - 1, +dd);

  const range = moment().range(startDate, endDate);
  const date_range = range.contains(today_Date);
  
  if (date_range === true) { 
    status = true;
  }
  return status;
}

export const get_USD_Value = (props) => {
  let suffixes = ["", "K", "M", "B", "T"];
  let suffixNum = Math.floor(("" + props.item.Budget).length / 3);
  let shortValue = parseFloat(
    (suffixNum !== 0
      ? props.item.Budget / Math.pow(1000, suffixNum)
      : props.item.Budget
    ).toPrecision(2)
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  let usdVal = shortValue + suffixes[suffixNum];

  return usdVal;
}


