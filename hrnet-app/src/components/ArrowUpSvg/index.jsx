import PropTypes from 'prop-types'
import './ArrowUpSvg.css'


/**
 * ArrowUpSvg properties
 * 
 * @typedef { Object } ArrowUpSvgProps
 * @prop { String } direction - direction of the button. Example: 'up'
 */
/**
 * React component: ArrowUpSvg
 * 
 * @type { React.FC<ArrowUpSvgProps> }
 * @returns { React.ReactElement }
 */
function  ArrowUpSvg({ direction }) {
    return (
        <svg
            className={`triangle triangle-${direction}`}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
            >
                <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    stroke="none">
                    <path d="M2448 4807 c-58 -22 -123 -64 -154 -99 -50 -57 -2266 -3906 -2282
                    -3962 -42 -158 37 -333 190 -413 l53 -28 2284 -3 c1469 -1 2296 1 2320 8 108
                    29 206 126 241 239 23 74 25 127 7 197 -15 59 -2232 3907 -2284 3965 -18 20
                    -61 51 -95 70 -56 29 -73 33 -153 36 -59 2 -103 -1 -127 -10z"/>
                </g>
        </svg>
    )
}

ArrowUpSvg.propTypes = {
    /** Example: 'up' */
    direction: PropTypes.string
}

export default ArrowUpSvg