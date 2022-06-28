import './Campaign.css';
import { getCampaignStatus, getUSDValue } from '../../utils/utils';
import PropTypes from 'prop-types';

const CampaignList = (props) => {
  const status = getCampaignStatus(props);
  const usdVal = getUSDValue(props);

  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{props.item.userName}</td>
      <td>{props.item.startDate}</td>
      <td>{props.item.endDate}</td>
      <td>
        <span className={ status ? 'active' : 'inActive' }></span>
        {status ? (
          <span className='active-status'>Active</span>
        ) : (
          <span>Inactive </span>
        )}
      </td>
      <td>{usdVal} USD</td>
    </tr>
  );
};

CampaignList.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string,
  userName: PropTypes.string
};

export default CampaignList;
