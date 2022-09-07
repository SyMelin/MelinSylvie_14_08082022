import { useDispatch } from 'react-redux'
import { sortEmployeeListAndMoveToPageNumber1 } from '../../utils/features/employeeList'
import ArrowUpSvg from '../ArrowUpSvg'
import './SortButton.css'

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

export default SortButton