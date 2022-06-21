import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import { Table } from "react-bootstrap";
import "./Campaign.css";
import { fetch_user, display_Loader } from "../Campaign/campaignAction";
import Search from "./Search";
import DateRange from "./DateRange";
import Loader from "./Loader";
import { campaignData } from "./Data";

const Campaign = () => {
  const state = useSelector((data) => data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(display_Loader(true));
    dispatch(fetch_user(campaignData));
  }, [dispatch]);

  const AddCampaigns = (data) => {
    dispatch(display_Loader(true));
    dispatch(fetch_user(data));
  };
  window.AddCampaigns = AddCampaigns;

  return (
    <>
      <DateRange />
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
