import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ImgContainer extends Component {
    static propTypes = {
        imgSrcs: propTypes.arrayOf(propTypes.string),
        imgWidth: propTypes.number.isRequired,
        imgHeight: propTypes.number.isRequired,
        duration: propTypes.number.isRequired,
    };

    state = {
        imgSrcs: [
            this.props.imgSrcs[this.props.imgSrcs.length - 1],
            ...this.props.imgSrcs,
            this.props.imgSrcs[0],
        ],
    };

    containerRef = (el) => {
        this.div = el;
    };

    //计时器间隔时间
    tick = 16;

    //计时器序号
    timer = null;

    switchTo(index) {
        if (index < 0) {
            index = 0;
        } else if (index > this.state.imgSrcs.length - 2) {
            index = this.state.imgSrcs.length - 2;
        }

        console.log(this.state.imgSrcs.length);
        const targetLeft = -(index + 1) * this.props.imgWidth;

        let curLeft = parseFloat(getComputedStyle(this.div).marginLeft);

        // console.log(targetLeft, curLeft);
        //计算运动的次数
        const times = Math.ceil(this.props.duration / this.tick);
        let curTimes = 0; //当前运动次数

        //计算每次运动的距离
        console.log(targetLeft, curLeft);
        let continueDis = 0;
        if (
            targetLeft === -500 &&
            curLeft === -(this.state.imgSrcs.length - 2) * this.props.imgWidth
        ) {
            continueDis = curLeft + 0;
            console.log('又条件成立');
        }
        if (
            targetLeft ===
                -(this.state.imgSrcs.length - 2) * this.props.imgWidth &&
            curLeft === -500
        ) {
            // this.div.style.marginLeft = targetLeft - 500 + 'px';
            // this.div.style.marginLeft = targetLeft + 'px'
            continueDis = -targetLeft + 0;
            console.log('左条件成立');
            // console.log('条件成立');
        }

        
        const totalDis = targetLeft - curLeft + continueDis;
        console.log(totalDis);
        const dis = totalDis / times;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            curTimes++;
            curLeft += dis;
            this.div.style.marginLeft = curLeft + 'px';
            if (times === curTimes) {
                this.div.style.marginLeft = targetLeft + 'px';
                continueDis = 0;
                clearInterval(this.timer);
            }
        }, this.tick);
    }

    render() {
        const imgs =
            this.state.imgSrcs &&
            this.state.imgSrcs.map((item, i) => (
                <img
                    src={item}
                    key={i}
                    alt=""
                    style={{
                        width: this.props.imgWidth,
                        height: this.props.imgHeight,
                    }}
                ></img>
            ));
        return (
            <div
                className="imgContainer"
                ref={this.containerRef}
                style={{
                    width: this.state.imgSrcs.length * this.props.imgWidth,
                    height: this.props.height,
                    marginLeft: -this.props.imgWidth,
                }}
            >
                {imgs}
            </div>
        );
    }
}
