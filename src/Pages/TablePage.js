import Table from "../Components/Table"
const TablePage = () => {
    const fruitData = [
        {name: 'Orange' , color: 'bg-orange-500', score: 5},
        {name: 'Apple' , color: 'bg-red-500', score: 3},
        {name: 'Banana' , color: 'bg-yellow-500', score: 1},
        {name: 'Lime' , color: 'bg-green-500', score: 4},
    ]

    const config = [
        {label: 'Name', render: (item) => item.name},
        {label: 'Color', render: (item) => <div className={`p-3 m-2 ${item.color}`} />},
        {label: 'Score', render: (item) => item.score}
    ];

    const keyFn = (item) => {
        return item.name
    }

  return (
    <div>
        <Table  data={fruitData} config={config} keyFn={keyFn} />
    </div>
  )
}

export default TablePage