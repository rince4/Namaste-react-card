import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restocard = () => {
  const [listRestoName, setListRestoName] = useState([]);
  const { resId } = useParams();
  console.log(resId);
  const fetchdata = async () => {
    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resId,
    );

    const json = await response.json();

    console.log("status:", json?.data?.cards[2].card.card.info);

    setListRestoName(json?.data?.cards[2].card.card.info);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="w-50 bg-amber-200 m-10 p-10 rounded-full">
      <h3 className="font-bold">{listRestoName.areaName}</h3>
      <h4>{listRestoName.locality}</h4>
      <h4>{listRestoName.name}</h4>
      <h4>{listRestoName.totalRatingsString}</h4>
      <h4>{listRestoName.costForTwo}</h4>
      <h4>Ratting {listRestoName.avgRating}</h4>
    </div>
  );
};
export default Restocard;
