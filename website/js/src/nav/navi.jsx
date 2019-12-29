import React from 'react'

import "./css/index.css"
import PubSub from 'pubsub-js'
class Navi extends React.Component {

    constructor(props) {
        super(props);

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name, e) {
           debugger;
            if (name=='link-seoncd'){
                this.props.history.push("/indexSecond.html");
            } else{
                PubSub.publish('EVENT', name);

            }


    }


    render() {
        return (

            <div>

                <div className="index-nav">
                    <div className="index-nav-frame clearfix">
                        <div className="nav-line">

                        </div>
                        <div className="nav-small" tabIndex="-1">
                            <div className="nav-small-focus" tabIndex="-1">

                            </div>
                            <img src="{icon}"/>
                        </div>
                        <div className="index-nav-frame-line active" tabIndex="-1">

                            <a href="javascript:void(0)"  onClick={this.handleClick.bind(this,'home')}>首页</a>
                            <div className="index-nav-frame-line-focus" tabIndex="-1"></div>
                        </div>
                        <div className="index-nav-frame-line" tabIndex="-1">
                            第二页面
                            <div className="index-nav-frame-line-center">
                                <div className="index-nav-frame-line-li" onClick={this.handleClick.bind(this,'second')}>
                                   启动2
                                </div>
                                <div className="index-nav-frame-line-li">
                                    第二页面2
                                </div>
                                <div className="index-nav-frame-line-li">
                                    第二页面3
                                </div>
                                <div className="index-nav-frame-line-li">
                                    第二页面4
                                </div>
                                <div className="index-nav-frame-line-li">
                                    第二页面5
                                </div>
                            </div>
                            <div className="index-nav-frame-line-focus" tabIndex="-1"></div>
                        </div>
                        <div className="index-nav-frame-line" tabIndex="-1">
                            <a href="javascript:void(0)" onClick="pageChane('api.html')" onClick={this.handleClick.bind(this,333)}>接口</a>

                            <div className="index-nav-frame-line-focus" tabIndex="-1"></div>
                        </div>
                        <div className="index-nav-frame-line" tabIndex="-1">
                            <a href="javascript:void(0)" onClick="pageChane('login.html')">登录</a>

                            <div className="index-nav-frame-line-focus" tabIndex="-1"></div>
                        </div>
                        <div className="index-nav-frame-line" tabIndex="-1">
                            <a href="javascript:void(0)" onClick={this.handleClick.bind(this,'link-seoncd')}>其他</a>

                            <div className="index-nav-frame-line-focus" tabIndex="-1"></div>
                        </div>
                    </div>
                </div>


            </div>


        )
    }
}

export default Navi