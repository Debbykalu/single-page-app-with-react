import SideBar from './Components/SideBar';
import Route from './Components/Route';
import DropdownPage from './Pages/DropdownPage';
import AccordionPage from './Pages/AccordionPage';
import ButtonPage from './Pages/ButtonPage';
import ModalPage from './Pages/ModalPage';
import TablePage from './Pages/TablePage';

const App = () => {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-10'>
      <SideBar />
      <div className='col-span-5'>
        
      <Route path="/">
        <DropdownPage />
      </Route>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/table">
        <TablePage />
      </Route>
      <Route path="/button">
        <ButtonPage />
      </Route>
      <Route path="/modal">
        <ModalPage />
      </Route>
      </div>
    </div>
  )
}

export default App