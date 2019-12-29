import React from 'react'
import ReactDom from 'react-dom';
import { render } from 'react-dom'
import Navi from "./nav/navi.jsx";
import  Content from "./content/content.jsx";
import  Foot from "./foot.jsx";

class Home extends React.Component {

    render() {
        return (
             <div>
            <Navi></Navi>
            <Content></Content>
            <Foot></Foot>
             </div>

        )
    }
}

export default Home