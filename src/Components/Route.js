import { useContext } from "react"
import NavigationContext from "../Context/NavigationContext"

const Route = ({path, children}) => {
    const {currentPath} = useContext(NavigationContext)
if(path === currentPath){
    return children;
}
 return null;
}

export default Route;