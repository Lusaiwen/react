import PropTypes from 'prop-types'

const types =  {
    datas: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string
    })),
    chooseDatas: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    value: PropTypes.string ,
    children: PropTypes.node,
}

export default types;