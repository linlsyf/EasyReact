
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
        dynamicLoadCss('./home/bottom/css/style.css');
        dynamicLoadJs('./home/bottom/js/jquery.min.js');
        dynamicLoadJs('./home/bottom/js/script.js');

        return (
        //
        <div>
        <h1>{this.props.name}</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
        </div>
            //
            //
            //
            // <div class="wave-box">
            //     <div class="marquee-box marquee-up" id="marquee-box">
            //         <div class="marquee">
            //             <div class="wave-list-box" id="wave-list-box1">
            //                 <ul>
            //                     <li>
            //                         <im height="60" alt="波浪" src="./home/bottom/images/wave_02.png"/>
            //                     </li>
            //                 </ul>
            //             </div>
            //             <div class="wave-list-box" id="wave-list-box2">
            //                 <ul>
            //                     <li>
            //                         <img height="60" alt="波浪" src="./home/bottom/images/wave_02.png"/>
            //                     </li>
            //                 </ul>
            //             </div>
            //         </div>
            //     </div>
            //     <div class="marquee-box" id="marquee-box3">
            //         <div class="marquee">
            //             <div class="wave-list-box" id="wave-list-box4">
            //                 <ul>
            //                     <li>
            //                         <img height="60" alt="波浪" src="./home/bottom//images/wave_01.png"/>
            //                     </li>
            //                 </ul>
            //             </div>
            //             <div class="wave-list-box" id="wave-list-box5">
            //                 <ul>
            //                     <li>
            //                         <img height="60" alt="波浪" src="./home/bottom/images/wave_01.png"/>
            //                     </li>
            //                 </ul>
            //             </div>
            //         </div>
            //     </div>
            // </div>

    );
    }
}