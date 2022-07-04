import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import './Campaign.css';
import CampaignList from './CampaignList';
import DateFilter from '../dateFilter/DateFilter';
import Search from '../search/Search';
import Loader from '../loader/Loader';
import { campaignData } from '../../data/Data';
import { displayLoader } from '../../actions/campaignAction';
import { getCampaignList } from '../../thunk/thunk'

const Campaign = () => {
  const state = useSelector((storeData) => storeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayLoader(true));
    dispatch(getCampaignList(campaignData));
  }, [ dispatch ]);

  const AddCampaigns = (data) => {
    dispatch(displayLoader(true));
    dispatch(getCampaignList(data));
  };
  window.AddCampaigns = AddCampaigns;

  return (
    <>
      <DateFilter />
      <Search />
      { state.loader ? <Loader /> : '' }
      {state.campaignList != null && state.campaignList.length > 0 ? (
        <Table striped bordered hover size="sm">
          <thead className="header-design">
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>Active</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {state.campaignList.map((item, index) => {
              return moment(item.startDate, 'MM-DD-YYYY').isBefore(moment(item.endDate, 'MM-DD-YYYY')) ? (
                <CampaignList key= { item.id } item= { item } /> ) : ( false );
            })}
          </tbody>
        </Table>
      ) : (
        <p className="notification">No Data Available</p>
      )}
    </>
  );
};
export default Campaign;
