import React from 'react';
import Link from './Components/Link';
import Route from './Components/Route';
import DropdownPage from './Pages/DropdownPage';
import AccordionPage from './Pages/AccordionPage';

const App = () => {
  return (
    <div className='flex'>
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to Dropdown</Link>

      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </div>
  )
}

export default App