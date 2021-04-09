import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';

let index = 0;

const srcs = [src1, src2, src3];
let timer = null;
const rootDom = document.getElementById('root');

function render() {
    ReactDOM.render((
        <img src={srcs[index]} alt={'第'+ index + '图片'}/>
    ), rootDom);
}

function start(){
    clearInterval(timer);
    timer = setInterval(() => {
        index = (index + 1) % srcs.length;  
        render();  
    }, 1000)
}

function stop(){
    clearInterval(timer);
}


rootDom.onmouseenter = function () {
    stop();
    console.log('进入');
}


rootDom.onmouseleave = function () {
    
    start();
    console.log('溢出');
}


start();

render();