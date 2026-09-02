import Card, { promotCard } from "./Card";
import { RESTO_URL } from "../Util/Constance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filterOfRestro, setFilterOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const EnhaceCard = promotCard(Card);

  const fetchdDataFromSite = async () => {
    const data = await fetch(RESTO_URL);
    const resp = await data.json();

    console.log("fetchdDataFromSite ", resp);

    const restro =
      resp?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestro(restro);
    setFilterOfRestro(restro);
  };
  useEffect(() => {
    fetchdDataFromSite();
  }, []);
  return (
    <>
      <div className="body-container-main">
        <div className="flex m-1 p-1 justify-between">
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                const resdata = listOfRestro?.filter((res) => {
                  return res.info.avgRating > 4.4;
                });
                setFilterOfRestro(resdata);
              }}
            >
              Top Restro
            </button>
          </div>
          <div>
            <input
              className="border-2 border-solid px-1 mx-4"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Item"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                const resdata = listOfRestro?.filter((res) => {
                  console.log(res);
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilterOfRestro(resdata);
              }}
            >
              Search Item
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-1 m-1 ">
        {filterOfRestro?.map((res) => {
          return (
            <Link key={res.info.id} to={"/resto/" + res.info.id}>
              {res.info.veg ? (
                <EnhaceCard key={res.info.id} restodata={res} />
              ) : (
                <Card key={res.info.id} restodata={res} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
