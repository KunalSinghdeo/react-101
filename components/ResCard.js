import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          src={`${CDN_URL}${props.cloudinaryImageId}`}
          alt="res-img"
          className="res-logo"
        />
      </div>
      <h3>{props.name}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.avg}</h4>
      <h4>{props.costForTwo}</h4>
      <h4>{`${props.deliveryTime} minutes`}</h4>
    </div>
  );
};
export default ResCard;
