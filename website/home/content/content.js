
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
      //  dynamicLoadCss('./home/content/css/content.css');

        const event = this.state.event
        switch (event) {
            case 'eventchange':
                return
                <div >
                <h1>content   has change</h1>
                </div>
                    ;
            default:

                return                     <div  >

                <h1>{event}</h1>
                </div>
                    ;
                break;
        }

    }
}