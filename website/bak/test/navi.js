//import './css/index.css';
// import './css/reset.css';
//import React from 'react';

//require('./css/index.css');

var React = require('react');

    class Navi extends React.Component {

    constructor(props) {
        super(props);

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
       // this.handleClick = this.handleClick.bind(this);
       //alert("nvai")
    }

    handleClick(name, e) {

        // PubSub.publish('EVENT', name);


    }

    render() {
        // dynamicLoadCss('./home/navi/css/index.css');
        // dynamicLoadCss('./home/navi/css/reset.css');

        return (

            www  hello
            // <div> text </div>

            // <div class="index-nav">
            //     <div class="index-nav-frame clearfix">
            //         <div class="nav-line">
            //
            //         </div>
            //         <div class="nav-small" tabindex="-1">
            //             <div class="nav-small-focus" tabindex="-1">
            //
            //             </div>
            //             <img src="img/icon.png"/>
            //         </div>
            //         <div class="index-nav-frame-line active" tabindex="-1">
            //             首页
            //             <div class="index-nav-frame-line-center">
            //                 <div class="index-nav-frame-line-li">
            //                     首页1
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     首页2
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     首页3
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     首页4
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     首页5
            //                 </div>
            //             </div>
            //             <div class="index-nav-frame-line-focus" tabindex="-1"></div>
            //         </div>
            //         <div class="index-nav-frame-line" tabindex="-1">
            //             第二页面
            //             <div class="index-nav-frame-line-center">
            //                 <div class="index-nav-frame-line-li" href="#"  onClick={this.handleClick.bind(this,222)}  >
            //
            //                        第二页面1
            //
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第二页面2
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第二页面3
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第二页面4
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第二页面5
            //                 </div>
            //             </div>
            //             <div class="index-nav-frame-line-focus" tabindex="-1"></div>
            //         </div>
            //         <div class="index-nav-frame-line" tabindex="-1">
            //             第三页面
            //             <div class="index-nav-frame-line-center">
            //                 <div class="index-nav-frame-line-li"onClick={this.handleClick.bind(this,333)}  >
            //                     第三页面1
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第三页面2
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第三页面3
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第三页面4
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第三页面5
            //                 </div>
            //             </div>
            //             <div class="index-nav-frame-line-focus" tabindex="-1"></div>
            //         </div>
            //         <div class="index-nav-frame-line" tabindex="-1">
            //             第四页面
            //             <div class="index-nav-frame-line-center">
            //
            //                 <div class="index-nav-frame-line-li"onClick={this.handleClick.bind(this,'admin')}  >
            //                     第四页面1
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第四页面2
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第四页面3
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第四页面4
            //                 </div>
            //                 <div class="index-nav-frame-line-li">
            //                     第四页面5
            //                 </div>
            //             </div>
            //             <div class="index-nav-frame-line-focus" tabindex="-1"></div>
            //         </div>
            //     </div>
            // </div>


    );
    }
}
module.exports = Hello;