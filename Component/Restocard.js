import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../Util/Constance";
import MenuCard from "./MenuCard";
import useRestCall from "../Util/useRestCall";

const Restocard = () => {
  const { resId } = useParams();
  console.log("param", resId);
  const resdata = useRestCall(resId);

  console.log(resdata.cards?.[2]?.card?.card?.info);

  const menu =
    resdata.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) => {
        return (
          res.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      },
    ) || {};

  const { name, locality } = resdata?.cards?.[2]?.card?.card?.info || {};

  console.log("menu", menu);
  return (
    <div className="text-center">
      <div className="font-bold py-5">
        <h1>{name}</h1>
        <h1>{locality}</h1>
      </div>
      <div>
        {menu.map((res) => {
          console.log(res);
        })}
      </div>
    </div>
  );
};
export default Restocard;
