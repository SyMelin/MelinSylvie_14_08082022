import SortButton from '../SortButton'
import { camelize } from '../../utils/utils'
import './SortButtonsContainer.css'

function SortButtonsContainer({ string, type }) {

    return (
        <div className='sortButtons-container'>
            {['up', 'down'].map((direction, index) => (
                <SortButton
                    key={`${string}SortButton-${index}`}
                    direction={direction}
                    string={string}
                    type={type}
                />
            ))}
        </div>
    )
}

export default SortButtonsContainer

/*
<div
    className="triangleButton triangleButton-up"
    onClick={() => {
        dispatch(sortEmployeeListAscendingOrder('firstName'))
    }}
>   
    <ArrowUpSvg direction="up" />
</div>
<div
    className="triangleButton triangleButton-down"
    onClick={() => {
        dispatch(sortEmployeeListDescendingOrder('firstName'))
    }}
>
    <ArrowUpSvg direction="down" />
</div>
*/