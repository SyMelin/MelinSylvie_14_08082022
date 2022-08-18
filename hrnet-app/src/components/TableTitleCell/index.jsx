import SortButtonsContainer from '../../components/SortButtonsContainer'
import { camelize } from '../../utils/utils'
import './TableTitleCell.css'

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

export default TableTitleCell