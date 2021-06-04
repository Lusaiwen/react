/**
 * @export
 * @param {*} fn 节流的操作
 * @param {*} wait 延迟
 * @returns
 */
export function throttle(fn, wait = 1000) {
    let prev = Date.now();
    return function (...args) {
        const now = Date.now();
        const context = this;
        console.log(now, prev, wait);
        if(now - prev > wait){
            console.log('运行');
            fn.apply(context, args)
            prev = Date.now();
        }
    };
}
