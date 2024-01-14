import { useContext } from "react"
import classNames from "classnames"
import NavigationContext from "../Context/NavigationContext"
const Link = ({to, children}) => {
    const { navigate } = useContext(NavigationContext);

    const classes = classNames('text-blue-500')
    const handleLinkClick = (e) => {
        if(e.metaKey || e.ctrlKey){
            return;
        }
        e.preventDefault();
        navigate(to)
    }
  return (
    <div>
        <a className={classes} href={to} onClick={handleLinkClick}>{children}</a>
    </div>
  )
}

export default Link