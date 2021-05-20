

/**
 * 判断obj是否为平面对象
 * @param {*} obj
 */
 export default function isPlainObject(obj) {
    if (typeof obj !== 'object') {
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}