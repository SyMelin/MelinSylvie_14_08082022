import PropTypes from 'prop-types'
import SortButton from '../SortButton'
import './SortButtonsContainer.css'


/**
 * SortButtonContainer properties
 * 
 * @typedef { Object } SortButtonContainerProps
 * @prop { String } string - property to be ordered
 * @prop { String } type - type of data to be ordered
 */
/**
 * React component: SortButtonContainer
 * 
 * @type { React.FC<SortButtonContainerProps> }
 * @returns { React.ReactElement }
 */
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

SortButtonsContainer.propTypes = {
    /** Property to be ordered */
    string: PropTypes.string.isRequired,
    /** Type of data to be ordered */
    type: PropTypes.string.isRequired,
}

export default SortButtonsContainer