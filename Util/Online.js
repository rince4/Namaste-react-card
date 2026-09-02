import { useEffect, useState } from "react";

const Online = () => {
  const getOnlineStatus = () => {
    window.addEventListener("online", () => {
      setOnline(true);
    });

    window.addEventListener("offline", () => {
      setOnline(false);
    });
  };
  const [Online, setOnline] = useState(true);
  useEffect(() => {
    getOnlineStatus();
  }, []);

  return Online;
};
export default Online;
