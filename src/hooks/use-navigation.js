import { useContext  } from "react";
import NavigationContext from "../Context/NavigationContext";

function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;
