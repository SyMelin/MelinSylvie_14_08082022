import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { sortEmployeeListAndMoveToPageNumber1 } from '../../utils/features/employeeList'
import ArrowUpSvg from '../ArrowUpSvg'
import './SortButton.css'


/**
 * SortButton properties
 * 
 * @typedef { Object } SortButtonProps
 * @prop { String } string - property to be ordered
 * @prop { String } type - type of data to be ordered
 * @prop { String } direction - direction of the button. Example: 'down'
 */
/**
 * React component: SortButton
 * 
 * @type { React.FC<SortButtonProps> }
 * @returns { React.ReactElement }
 */
function SortButton({ string, type, direction }) {

    const dispatch = useDispatch()

    return (
        <div
            className={`sortButton sortButton-${direction}`}
            onClick={() => {
               dispatch(sortEmployeeListAndMoveToPageNumber1(string, type, direction))
            }}
        >   
            <ArrowUpSvg direction={direction} />
            <span className='sortButton__tag'>{ direction === 'up' ? 'Ascending order' : direction === 'down' ? 'Descending order' : null}</span>
        </div>
    )
}

SortButton.propTypes = {
    /** Property to be ordered */
    string: PropTypes.string.isRequired,
    /** Type of data to be ordered */
    type: PropTypes.string.isRequired,
    /** Direction of the button. Example: 'down' */
    direction: PropTypes.string.isRequired
}

export default SortButton