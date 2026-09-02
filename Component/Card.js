import { BGLOGO } from "../Util/Constance";

const Card = (props) => {
  const { name, locality, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    props.restodata.info;
  return (
    <div
      className="border border-blue-900 rounded-lg p-1 hover:bg-blue-100  hover:shadow-lg
  hover:scale-105"
    >
      <div>
        <img
          className="w-50"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="text-center">
        <h3 className="font-bold">{name}</h3>
        <h4>{locality}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>Ratting {avgRating}</h4>
      </div>
    </div>
  );
};

export const promotCard = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-700 text-amber-50 rounded-lg m-1">
          Non-Vag
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
