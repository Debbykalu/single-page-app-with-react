import Link from "./Link";

const SideBar = () => {

    const links = [
        {page: 'Dropdown', path: '/'},
        {page: 'Accordion', path: '/accordion'},
        {page: 'Table', path: '/table'},
        {page: 'Button', path: '/button'},
        {page: 'Modal', path: '/modal'}
    ];

    const renderedPage = links.map((link) => {
        return (
        <div className="mb-8">
            <Link 
                key={link.page} 
                to={link.path}  
                className='mb-4'
                activeClassName='font-bold border-l-4 border-blue-500 pl-2'
            >
                    {link.page}
            </Link>
        </div>
        )
    })
  return (
    <div className="sticky top-0  flex flex-col items-start">
        {renderedPage}
    </div>
  )
}

export default SideBar