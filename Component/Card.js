import { BGLOGO } from "../Util/Constance";

const Card = (props) => {
  const { name, locality, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    props.restodata.info;
  return (
    <div className="card-container">
      <div>
        <img
          className="card-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="card-text">
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>Ratting {avgRating}</h4>
      </div>
    </div>
  );
};

export default Card;
