import Accordion from '../Components/Accordion'; 
function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Click here to read about useEffect hook",
      content: "useEffect hook is a function that allows functional components to perform side effects. Side effects in the context of React typically include data fetching, subscriptions, manual DOM manipulations, or any code that needs to be executed after the component has been rendered."
    },
    {
      id:2,
      label: "Click here to read about useCallback hook",
      content: "useCallback in React memoizes a callback, preventing unnecessary renders in child components that depend on it."
    },
    {
      id:3,
      label: "Click here to read about useState hook",
      content: "useState in React manages stateful values, triggering re-renders and updating UI components with dynamic data."
    },
  ]
  return(
    <div className='mt-10'>
        <Accordion items={items}  />
    </div>
  )
}

export default AccordionPage;
