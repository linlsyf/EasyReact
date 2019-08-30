
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
        switch (event) {
            case 'eventchange':
                return <h1>content   has change</h1>;
            default:
                return <h1>{event}</h1>;
                break;
        }

    }
}