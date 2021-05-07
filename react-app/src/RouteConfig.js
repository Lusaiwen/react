const config = {
    user: {
        root: '/user',
        update: '/update',
        pay: {
            root: '/pay',
            afterPay: '/afterPay',
            beforePay: '/beforePay',
        },
    },
};

function setConfig(obj, baseUrl) {
    _setConfig(obj, baseUrl);
}

/**
 * 将该对象的每一个字符串属性，前面添加baseStr
 * 如果属性名为root，则直接添加baseStr
 * 如果属性名不是root，则添加baseStr/root属性值
 * 如果属性不是字符串，递归调用该方法
 * @param {*} obj
 * @param {*} baseUrl
 */
function _setConfig(obj, baseUrl) {
    console.log(baseUrl, obj.root );
    const newBaseUrl = baseUrl + (obj.root ? obj.root : '');
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'string') {
            if (prop === 'root') {
                obj[prop] = newBaseUrl + '/';
            } else {
                obj[prop] = newBaseUrl + value;
            }
        } else {
            _setConfig(obj[prop], newBaseUrl);
        }
    }
}

setConfig(config, '');

export default config;
