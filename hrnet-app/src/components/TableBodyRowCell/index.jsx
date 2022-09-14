import PropTypes from 'prop-types'
import './TableBodyRowCell.css'


/**
 * TableBodyRowCell properties
 * 
 * @typedef { Object } TableBodyRowCellProps
 * @prop { String } value - value to display
 * @prop { Integer } index
 */
/**
 * React component: TableBodyRowCell
 * 
 * @type { React.FC<TableBodyRowCellProps> }
 * @returns { React.ReactElement }
 */
function TableBodyRowCell({ value, index }) {
    return (
        <td className={`table-body-row-cell cell--${index}`}>{value}</td>
    )
}

TableBodyRowCell.propTypes = {
    /** Value to display */
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}

export default TableBodyRowCell