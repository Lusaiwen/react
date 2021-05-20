function getRandomString(length) {
    return Math.random().toString(36).substr(2, length).split('').join('.');
}

const actionTypes = {
    INIT(){
        return `@@redux/INIT${getRandomString(6)}`
    },
    UNKNOWN(){
        return `@@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
    }
}

export default actionTypes;
