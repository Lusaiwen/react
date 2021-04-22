import React from 'react';
import './index.css';

/**
 * 需要传入的参数
 * current 当前页
 * total  总数据量
 * limit 每页放的数据量
 * pannerNumber  页码最多显示几个
 * @returns
 */

export default function Pager(props) {
    const pageNumber = Math.ceil(props.total / props.limit);
    const min = getMinNumber(props);
    const max = getMaxNumber(props, pageNumber);
    let nums = [];
    for (let i = min; i <= max; i++) {
        nums.push(
            <span
                className={props.current === i ? 'item active' : 'item'}
                key={i}
                onClick={() => {
                    toPage(i, props);
                }}
            >
                {i}
            </span>
        );
    }

    return (
        <>
            <span
                className={props.current === 1 ? 'item disabled' : 'item'}
                onClick={() => {
                    toPage(1, props);
                }}
            >
                首页
            </span>
            <span
                className={props.current === 1 ? 'item disabled' : 'item'}
                onClick={() => {
                    toPage(
                        props.current - 1 < 1 ? 1 : props.current - 1,
                        props
                    );
                }}
            >
                上一页
            </span>
            {nums}
            <span
                className={
                    props.current === pageNumber ? 'item disabled' : 'item'
                }
                onClick={() => {
                    toPage(
                        props.current + 1 > pageNumber
                            ? pageNumber
                            : props.current + 1,
                        props
                    );
                }}
            >
                下一页
            </span>
            <span
                className={
                    props.current === pageNumber ? 'item disabled' : 'item'
                }
                onClick={() => {
                    toPage(pageNumber, props);
                }}
            >
                尾页
            </span>
            <span className="current">{props.current > pageNumber ? pageNumber : props.current}</span>/
            <span className="total">{pageNumber}</span>
        </>
    );
}

/**
 * 跳转页码
 * @param {*} target 跳转的页码
 * @param {*} props props对象
 * @returns
 */
function toPage(target, props) {
    if (!target) {
        return;
    }
    props.onPageChange && props.onPageChange(target);
}

/**
 *  获取页数最小值
 * @param {*} props
 */
function getMinNumber(props) {
    let min = props.current - Math.floor(props.pannerNumber / 2);
    min = min < 1 ? 1 : min;
    return min;
}

/**
 * 获取页数最大值
 * @param {*} props
 */
function getMaxNumber(props, pageNumber) {
    let max = props.current + Math.floor(props.pannerNumber / 2);
    max = max > pageNumber ? pageNumber : max;
    return max;
}