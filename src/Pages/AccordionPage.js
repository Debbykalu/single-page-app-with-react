import Accordion from '../Components/Accordion'; 
function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Click here to read about useEffect hook",
      content: "useEffect hook is a function that allows functional components to perform side effects. Side effects in the context of React typically include data fetching, subscriptions, manual DOM manipulations, or any code that needs to be executed after the component has been rendered. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
      id:2,
      label: "Click here to read about useCallback hook",
      content: "useCallback in React memoizes a callback, preventing unnecessary renders in child components that depend on it. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
      id:3,
      label: "Click here to read about useState hook",
      content: "useState in React manages stateful values, triggering re-renders and updating UI components with dynamic data. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
      id:3,
      label: "Click here to read about useState hook",
      content: "useState in React manages stateful values, triggering re-renders and updating UI components with dynamic data. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
  ]
  return(
    <div>
        <Accordion items={items}  />
    </div>
  )
}

export default AccordionPage;
