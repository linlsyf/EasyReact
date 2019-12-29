import React from 'react'
import PubSub from 'pubsub-js'
import "./banner/css/style.css"
import   "./banner/js/carousel.js"
import   "./banner/js/banchange.js"
class ContentHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {event: ""};
    }

    componentDidMount() {
        PubSub.subscribe('EVENT', (msg, param) => {

            this.setState({
                event: param
            });
        })
    }
    render() {

        return (


            <div id="content" style={{height: '500px'}}>

                <div id="carousel1" className="carousel-content">
                    <ul className="carousel">
                        <li><img src="./img/a1.png"/></li>
                        <li><img src="./img/a2.png"/></li>
                        <li><img src="./img/a3.png"/></li>
                        <li><img src="./img/a4.png"/></li>
                        <li><img src="./img/a5.png"/></li>
                    </ul>
                    <ul className="carousel-index"></ul>
                    <div className="carousel-prev"><img src="./img/left_btn1.png"/></div>
                    <div className="carousel-next"><img src="./img/right_btn1.png"/></div>
                </div>

            </div>





    )
    }

    // public
}

export default ContentHome