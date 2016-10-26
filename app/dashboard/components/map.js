import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
    constructor(props) {
        super(props);
        }

    render(){
        return (
            React.createElement("iframe",  {ref : "iframe",
                                            frameBorder: "0",
                                            src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45041.67508617712!2d13.02332884286839!3d55.596625113785706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssv!2sse!4v1476880394885",
                                            style:{},
                                            width: "800",
                                            height:"600"})
        );
    }
}


export default Map;