import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`./menu.json`)
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        setLoader(false);
      });
  }, []);
  return [menu, loader];
};
export default useMenu;
