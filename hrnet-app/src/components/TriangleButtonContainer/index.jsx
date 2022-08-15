import { useDispatch } from 'react-redux'
import { sortEmployeeListAscendingOrder, sortEmployeeListDescendingOrder } from '../../utils/features/employeeList'
import ArrowUpSvg from '../ArrowUpSvg'
import './TriangleButtonContainer.css'

function TriangleButtonContainer() {

    const dispatch = useDispatch()

    return (
        <div className='triangleButton-container'>
            <div
                className="triangleButton"
                onClick={() => {
                    dispatch(sortEmployeeListAscendingOrder('firstName'))
                }}
            >   
                <ArrowUpSvg direction="up" />
            </div>
            <div
                className="triangleButton"
                onClick={() => {
                    dispatch(sortEmployeeListDescendingOrder('firstName'))
                }}
            >
               <ArrowUpSvg direction="down" />
            </div>
        </div>
    )
}

export default TriangleButtonContainer