
class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
        <div>
        <h1>{this.props.name}</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
    }
}