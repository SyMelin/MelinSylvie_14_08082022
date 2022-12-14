import PropTypes from 'prop-types'
import SortButtonsContainer from '../../components/SortButtonsContainer'
import { camelize } from '../../utils/utils'
import './TableTitleCell.css'


/**
 * TableTitleCell properties
 * 
 * @typedef { Object } TableTitleCellProps
 * @prop { String } title - title of the column
 * @prop { String } type - type of data to be ordered
 */
/**
 * React component: TableTitleCell
 * 
 * @type { React.FC<TableTitleCellProps> }
 * @returns { React.ReactElement }
 */
function TableTitleCell({ title, type }) {
    return (
        <th
            
            className='table-titleColumn'
        >
            <div className='titleColumn-content'>
                <p>{title}</p>
                <SortButtonsContainer
                    string={camelize(title)}
                    type={type}
                />
            </div>
        </th>
    )
}

TableTitleCell.propTypes = {
    /** Title of the column */
    title: PropTypes.string.isRequired,
    /** Type of data to be ordered */
    type: PropTypes.string.isRequired
}

export default TableTitleCell