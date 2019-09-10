


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {event: ""};
        //dynamicLoadJs('./home/content/content_lv_sect.js');
    }

    componentDidMount() {
        PubSub.subscribe('EVENT', (msg, param) => {

            this.setState({
                event: param
            });
        })
    }




    render() {
       // dynamicLoadCss('./home/content/css/content.css');
      //dynamicLoadJs('./home/content/content_lv_sect.js');

        //const component = require('./home/content/ContentLvSect')
        // const component = require('./home/content/ContentLvSect')

        const event = this.state.event

          if(event=='222'){
              return                     <div  >


                  <ContentLvSect/>
              </div>
                  ;
          } else{
              return                     <div  >

                          <h1>{event}</h1>
                         </div>
                        ;

          }



    }
}