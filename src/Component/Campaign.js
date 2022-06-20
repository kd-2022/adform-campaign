import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import CampaignList from "./CampaignList";
import { Table } from "react-bootstrap";
import "./Campaign.css";
import { fetch_user, display_Loader } from "../Campaign/campaignAction";
import Search from "./Search";
import DateRange from "./DateRange";
import Loader from "./Loader";
const Campaign = () => {
  const state = useSelector((data) => data);
  const dispatch = useDispatch();

  let campaignList = [
    {
      id: 1,
      name: "Divavu",
      startDate: "9/19/2017",
      endDate: "6/30/2022",
      Budget: 88377,
      userId: 3,
    },
    {
      id: 2,
      name: "Jaxspan",
      startDate: "11/21/2017",
      endDate: "2/21/2018",
      Budget: 608715,
      userId: 6,
    },
    {
      id: 3,
      name: "Miboo",
      startDate: "11/1/2017",
      endDate: "6/20/2017",
      Budget: 3134567899,
      userId: 7,
    },
    {
      id: 4,
      name: "Trilith",
      startDate: "8/25/2017",
      endDate: "11/30/2017",
      Budget: 179838,
      userId: 1,
    },
    {
      id: 5,
      name: "Layo",
      startDate: "11/28/2017",
      endDate: "3/10/2018",
      Budget: 58377,
      userId: 9,
    },
    {
      id: 6,
      name: "Photojam",
      startDate: "7/25/2017",
      endDate: "6/23/2017",
      Budget: 858131,
      userId: 3,
    },
    {
      id: 7,
      name: "Blogtag",
      startDate: "6/27/2017",
      endDate: "1/15/2018",
      Budget: 109078,
      userId: 2,
    },
    {
      id: 8,
      name: "Rhyzio",
      startDate: "10/13/2017",
      endDate: "1/25/2018",
      Budget: 1234567899,
      userId: 4,
    },
    {
      id: 9,
      name: "Zoomcast",
      startDate: "9/6/2017",
      endDate: "11/10/2017",
      Budget: 301919,
      userId: 8,
    },
    {
      id: 10,
      name: "Realbridge",
      startDate: "3/5/2018",
      endDate: "10/8/2022",
      Budget: 4567890,
      userId: 57,
    },
  ];

  useEffect(() => {
    dispatch(display_Loader(true));
    dispatch(fetch_user(campaignList));
  }, [dispatch]);

  const AddCampaigns = (data) => {
    dispatch(display_Loader(true));
    dispatch(fetch_user(data));
  };
  window.AddCampaigns = AddCampaigns;

  return (
    <>
      <h2>Campaign Data</h2>
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
              return <CampaignList key={index} item={item} />;
            })}
          </tbody>
        </Table>
      ) : (
        <p>No Data Available</p>
      )}
    </>
  );
};
export default Campaign;
