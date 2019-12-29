import React from 'react'
import PubSub from 'pubsub-js'
import "./banner/css/style.css"
import   "./banner/js/carousel.js"
import   "./banner/js/banchange.js"
import   ContentFirst   from "./Contentone.jsx"
import   ContentHome  from "./Content_home.jsx"

class Content extends React.Component {
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
       const event = this.state.event
        // alert(event)

        if(event=='second'){
            return          <ContentFirst/>
                ;
        } else{
            return             <ContentHome/>

                ;

        }



    }

    // public
}

export default Content