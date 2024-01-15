import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";
const Link = ({to, children, className, activeClassName}) => {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-blue-500',
         className,
         currentPath === to && activeClassName
         )
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