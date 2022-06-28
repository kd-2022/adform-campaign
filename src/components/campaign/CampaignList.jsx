import "./Campaign.css";
import { get_Campaign_Status, get_USD_Value } from "../../utils/utils";

const CampaignList = (props) => {
  let status = get_Campaign_Status(props);
  let usdVal = get_USD_Value(props);

  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{props.item.userName}</td>
      <td>{props.item.startDate}</td>
      <td>{props.item.endDate}</td>
      <td>
        <span className={status ? "active" : "inActive"}></span>
        {status ? (
          <span className="active-status">Active</span>
        ) : (
          <span>Inactive </span>
        )}
      </td>
      <td>{usdVal} USD</td>
    </tr>
  );
};

export default CampaignList;
