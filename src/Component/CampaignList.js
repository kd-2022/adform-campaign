import "./Campaign.css";

const CampaignList = (props) => {

  let display = true;

  if (new Date(props.item.startDate).getTime() < new Date(props.item.endDate).getTime() ) {
    display = false;
  }
  
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  let status = false;
  if (
    new Date(props.item.startDate).getTime() < new Date(today).getTime() &&
    new Date(props.item.endDate).getTime() > new Date(today).getTime()
  ) {
    status = true;
  }

  let suffixes = ["", "K", "M", "B", "T"];
  let suffixNum = Math.floor(("" + props.item.Budget).length / 3);
  let shortValue = parseFloat(
    (suffixNum != 0
      ? props.item.Budget / Math.pow(1000, suffixNum)
      : props.item.Budget
    ).toPrecision(2)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  let usdVal = shortValue + suffixes[suffixNum];


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
