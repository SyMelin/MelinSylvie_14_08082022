import './TableBodyRowCell.css'

function TableBodyRowCell({ value, index }) {
    return (
        <td className={`table-body-row-cell cell--${index}`}>{value}</td>
    )
}

export default TableBodyRowCell