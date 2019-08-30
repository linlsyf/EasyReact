class AppContent extends React.Component {

    constructor(props) {
        super(props);

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
      //  this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        // PubSub.subscribe('EVENT', (msg, param) => {
        //
        //
        //     this.setState({
        //         event: param
        //     });
        // })
    }


    render() {
        dynamicLoadJs('./home/navi/navi.js',null);
        // dynamicLoadJs('./home/bottom/bottom.js');
        // dynamicLoadJs('./home/content/content.js');
        return (
            <div>
                <Navi />


                {/*<Content    />*/}
                {/*<Bottom />*/}


            </div>
        );

        // return (
        //     //
        //     <div>
        //         <h1>{this.props.name}</h1>
        //         <h2>现在是</h2>
        //     </div>
        //
        //
        // );
    }
}