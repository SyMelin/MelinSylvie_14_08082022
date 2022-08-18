import { useDispatch } from 'react-redux'
import { sortEmployeeList } from '../../utils/features/employeeList'
import ArrowUpSvg from '../ArrowUpSvg'
import './SortButton.css'

function SortButton({ string, type, direction }) {

    const dispatch = useDispatch()

    return (
        <div
            className="sortButton sortButton-up"
            onClick={() => {
               dispatch(sortEmployeeList(string, type, direction))
            }}
        >   
            <ArrowUpSvg direction={direction} />
        </div>
    )
}

export default SortButton