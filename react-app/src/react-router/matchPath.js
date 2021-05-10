import { pathToRegexp } from 'path-to-regexp';

/**
 * 得到匹配结果(match对象)
 * 如果不能匹配，返回undefined
 * 如果可以匹配，匹配结果是一个对象，该对象中属性名对应路径规则中的关键字
 *
 * @param {*} path
 * @param {*} pathname
 * @param {*} options 参数: strict, exact, sensitive
 */

export default function matchPath(path, pathname,  options) {
    const keys = [];
    console.log(getOptions(options));
    const regExp = pathToRegexp(path, keys, getOptions(options));
    console.log(regExp);
    let result = regExp.exec(pathname);

    if (!result) {
        return;
    }
    let groups = Array.from(result);
    groups = groups.splice(1);
    const params = getParams(groups, keys);
    return {
        isExact: pathname === result[0],
        params,
        path,
        url: result[0],
    };
}

/**
 * 根据分组结果和key得到params对象
 * @param {*} groups 分组结果
 * @param {*} keys 关键字
 */

function getParams(groups, keys) {
    const obj = {};
    for (let i = 0; i < groups.length; i++) {
        const value = groups[i];
        const name = keys[i].name;
        obj[name] = value;
    }
    return obj;
}

function getOptions(options) {
    const defalutOptions = {
        sensitive: false,
        strict: false,
        exact: false,
    };
    const opts = { ...defalutOptions, ...options };
    return {
        sensitive: opts.sensitive,
        strict: opts.strict,
        exact: opts.exact,
        end: opts.exact,
    };
}

const result = matchPath('/news/:id', '/news/123');

console.log(result);
