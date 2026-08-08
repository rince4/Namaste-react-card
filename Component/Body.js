import Card from "./Card";
import { RESTO_URL } from "../Util/Constance";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filterOfRestro, setFilterOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchdDataFromSite = async () => {
    const data = await fetch(RESTO_URL);
    const resp = await data.json();

    const restro =
      resp?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
        <div className="find-bar">
          <div>
            <button
              className="btnsearch"
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
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Item"
            />
            <button
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
      <div className="card-container-main">
        {filterOfRestro?.map((res) => {
          return <Card key={res.info.id} restodata={res} />;
        })}
      </div>
    </>
  );
};
export default Body;
