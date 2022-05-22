import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Utils = createContext();

const useUtilsContext = () => {
  return useContext(Utils);
};

const UtilsProvider = ({ children }) => {
  //Checks if is mobile size
  const [isMobile] = useState(window.matchMedia("(max-width: 960px)").matches);

  //Navigation hook
  const navigate = useNavigate();

  const values = {
    isMobile,
    navigate,
  };

  return <Utils.Provider value={values}>{children}</Utils.Provider>;
};

export { useUtilsContext, UtilsProvider as default };
