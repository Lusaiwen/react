export function debounce(fn, wait = 1000) {
    let timer = null;
    return function (...args) {
        const context = this;
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    };
}
