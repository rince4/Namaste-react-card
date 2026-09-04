import { BASE_URL } from "./Constance";
import { useEffect, useState } from "react";

const useRestCall = (resID) => {
  const [listRestoName, setListRestoName] = useState([]);
  const fetchdata = async () => {
    const response = await fetch(BASE_URL + resID);
    const json = await response.json();
    setListRestoName(json?.data);
  };
  useEffect(() => {
    fetchdata();
  }, [resID]);
  return listRestoName;
};
export default useRestCall;
