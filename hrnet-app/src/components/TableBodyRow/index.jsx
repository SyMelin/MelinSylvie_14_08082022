import TableBodyRowCell from '../TableBodyRowCell'
import './TableBodyRow.css'

function TableBodyRow ({ rowIndex, employee }) {
    return (
        <tr className={Number.isInteger(rowIndex / 2) ? 'table-body-row table-body-row--evenIndex': 'table-body-row table-body-row--oddIndex'}>
            {Object.values(employee).map((value, index) => (
                <TableBodyRowCell
                    key={`tableBodyRow-${rowIndex}-rowCell-${index}`}
                    value={value}
                    index={index}
                />
            ))}
        </tr>
    )
}

export default TableBodyRow