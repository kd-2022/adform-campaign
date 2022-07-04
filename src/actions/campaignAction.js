import {
  GET_CAMPAIGN_WITH_USER,
  SEARCH_CAMPAIGN_BY_NAME,
  SEARCH_CAMPAIGN_BY_DATE,
  DISPLAY_LOADER,
} from '../types/campaignType';

export const getCampaignWithUser = (data) => ({
    type: GET_CAMPAIGN_WITH_USER,
    payload: data
});

export const searchCampaignByName = (search) => ({
    type: SEARCH_CAMPAIGN_BY_NAME,
    payload: search
});

export const searchCampaignByDate = (date) => ({
    type: SEARCH_CAMPAIGN_BY_DATE,
    payload: date
});

export const displayLoader = (status) => ({
    type: DISPLAY_LOADER,
    payload: status
});
