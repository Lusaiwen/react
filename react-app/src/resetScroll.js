let timer1, timer2;

/**
 * 滚动条横向和纵向复位
 */
export default function resetScroll() {
    clearInterval(timer1);
    clearInterval(timer2);
    const html = document.documentElement;
    timer1 = animate(html.scrollTop, 0, (val) => {
        console.log(val);
        html.scrollTop = val;
    });

    timer2 = animate(html.scrollLeft, 0, (val) => {
        html.scrollLeft = val;
    });
}

/**
 * 滚动条动画效果
 * @param {*} start
 * @param {*} end
 */
function animate(start, end, callback) {
    const tick = 16;
    const time = 200;
    const times = Math.ceil(time / tick); //滚动条变换次数
    const dis = (end - start) / times; //每次移动的距离
    let curTime = 0;
    let timer = setInterval(() => {
        curTime++;
        start += dis;
        if (curTime === times) {
            start = end;
            clearInterval(timer);
        }
        callback(start);
    }, tick);
    return timer;
}
