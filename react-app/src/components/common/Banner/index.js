import React, { Component } from 'react';
import propTypes from 'prop-types';
import './index.css';
import ImgContainer from './ImgContainer';
import SwitchArrow from './SwitchArrow'
import SwitchDot from './SwitchDot'

export default class Banner extends Component {
    static defaultProps = {
        width: 500,
        height: 300,
        imgSrcs: [],
        autoDuration: 2000,
        duration: 500
    };

    static propTypes = {
        width: propTypes.number, //容器宽度
        height: propTypes.number, //容器高度
        imgSrcs: propTypes.arrayOf(propTypes.string),
        autoDuration: propTypes.number, //自动轮播事件
        duration: propTypes.number, //图片运动时间
    };

    state = {
        curIndex: 0 
    }

    componentDidMount(){
        this.autoSwitch();
    }

    autoSwitch(){
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            var cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwitch(cur);
        }, this.props.autoDuration)
    }

    /**
     * 切换到第几张图片
     * @param {*} index
     */
    handleSwitch = (index) => {
        this.setState({
            curIndex: index
        })
        this.imgContainer.switchTo(index);
    };


    handleChangeArrow = type => {
        let cur = this.state.curIndex;
        if(type === 'left'){
            cur --;
            if(cur < 0){
                cur = this.props.imgSrcs.length - 1;
            }
        }else {
            cur ++;
            if(cur > this.props.imgSrcs.length - 1){
                cur = 0;
            }
        }
        this.handleSwitch(cur);
    }

    imgContainerRef = (el) => {
        this.imgContainer = el;
    };

    render() {
        return (
            <div
                className="banner-contanier"
                style={{
                    width: this.props.width,
                    height: this.props.height,
                }}
                onMouseEnter={() => {
                    clearInterval(this.timer);
                }}
                onMouseLeave={() => {
                    this.autoSwitch();
                }}
            >
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    duration={this.props.duration}
                />
                <SwitchArrow onChange={this.handleChangeArrow}/>
                <SwitchDot total={this.props.imgSrcs.length} curIndex={this.state.curIndex} onChange={this.handleSwitch} />
            </div>
        );
    }
}
