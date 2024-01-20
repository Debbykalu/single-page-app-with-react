const Table = ({data, config, keyFn}) => {
  const renderHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>
  });
    const renderFruitData = data.map((item) => {
        const renderedCells = config.map((column) => {
            return <td className="p-3">{column.render(item)}</td>
        })
        return (
            <tr className="border-b" key={keyFn(item)}>
                {renderedCells}
            </tr>
        )
    });
  return (
    <div>
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderHeader}</tr>
            </thead>
            <tbody>{renderFruitData}</tbody>
        </table>
    </div>
  )
}

export default Table