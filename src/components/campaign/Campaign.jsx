import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import "./Campaign.css";
import CampaignList from "./CampaignList";
import DateFilter from "../dateFilter/DateFilter";
import Search from "../search/Search";
import Loader from "../loader/Loader";
import { campaignData } from "../../data/Data";
import { get_Campaign_List, display_Loader } from "../../actions/campaignAction";

const Campaign = () => {
  const state = useSelector((storeData) => storeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(display_Loader(true));
    dispatch(get_Campaign_List(campaignData));
  }, [dispatch]);

  const AddCampaigns = (data) => {
    dispatch(display_Loader(true));
    dispatch(get_Campaign_List(data));
  };
  window.AddCampaigns = AddCampaigns;

  return (
    <>
      <DateFilter />
      <Search />
      {state.loader ? <Loader /> : ""}
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
              return new Date(item.endDate).getTime() > new Date(item.startDate).getTime() ? (
                <CampaignList key={index} item={item} /> ) : ( false );
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
