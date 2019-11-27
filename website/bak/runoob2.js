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

            wwwhello


    );
    }
}
module.exports = Navi;