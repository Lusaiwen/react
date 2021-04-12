import PropTypes from 'prop-types'

const types =  {
    datas: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string
    })),
    chooseDatas: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    value: PropTypes.string  ,
    children: PropTypes.node,
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    left: PropTypes.node,
    right: PropTypes.node,
    minWidth: PropTypes.number,
    gap: PropTypes.number,
    any: PropTypes.any
}

export default types;