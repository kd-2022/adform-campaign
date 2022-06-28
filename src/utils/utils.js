import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export const getCampaignWithUser = (action) => {
  if (action.payload.campaignList != null && action.payload.campaignList.length > 0) 
  {
    const newCampgainList = action.payload.campaignList.map((item) => {
      var userDetails = action.payload.userList.find(
        (user) => user.id === item.userId
      );
      let newUserDetails;
      if (userDetails != null && userDetails.name != null) {
        newUserDetails = { ...item, userName: userDetails.name };
      } else {
        newUserDetails = { ...item, userName: 'Unknown User' };
      }
      return newUserDetails;
    });
    return newCampgainList;
  } else {
    const newCampgainList = [];
    return newCampgainList;
  }
};

export const searchCampaignByDate = (initialState,action) => {
    const searchByDateResults = initialState.campaignList.filter((item) => {

        const [ startM, startD, startY ] = moment(action.payload.startDate).format('MM/DD/YYYY').split('/');
        const [ endM, endD, endY ] = moment(action.payload.endDate).format('MM/DD/YYYY').split('/');

        const [ monthS, dayS, yearS ] = item.startDate.split('/');
        const [ monthE, dayE, yearE ] = item.endDate.split('/');
        
        const startDate = new Date(+yearS, monthS - 1, +dayS);
        const endDate = new Date(+yearE, monthE - 1, +dayE);
        
        const selectedStartDate = new Date(+startY, startM - 1, +startD);
        const selectedEndDate = new Date(+endY, endM - 1, +endD);
        const range = moment().range(selectedStartDate, selectedEndDate);
        const startRange = range.contains(startDate);
        const endRange = range.contains(endDate);

        if (startRange === true || endRange === true) {
          return true;
        }
        else{
            return false;
        }
      });
      return searchByDateResults;
}

export const searchCampaignByName = (initialState,action) => {
    const searchResults = initialState.campaignList.filter((item) => {
        return item.name.toLowerCase().includes(action.payload);
      });
      return searchResults;
}

export const getCampaignStatus = (props) => {
  let status = false;  
  const [ mm, dd, yyyy ] = moment(new Date()).format('MM/DD/YYYY').split('/');
  
  const [ monthS, dayS, yearS ] = props.item.startDate.split('/');
  const [ monthE, dayE, yearE ] = props.item.endDate.split('/');

  const startDate = new Date(+yearS, monthS - 1, +dayS);
  const endDate = new Date(+yearE, monthE - 1, +dayE);
  const todayDate = new Date(+yyyy, mm - 1, +dd);

  const range = moment().range(startDate, endDate);
  const dateRange = range.contains(todayDate);
  
  if (dateRange === true) { 
    status = true;
  }
  return status;
}

export const getUSDValue = (props) => {
  const suffixes = [ '', 'K', 'M', 'B', 'T' ];
  const suffixNum = Math.floor(('' + props.item.Budget).length / 3);
  let shortValue = parseFloat(
    (suffixNum !== 0
      ? props.item.Budget / Math.pow(1000, suffixNum)
      : props.item.Budget
    ).toPrecision(2)
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  const usdVal = shortValue + suffixes[ suffixNum ];

  return usdVal;
}
