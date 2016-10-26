import React from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        }

    render(){
        return (
            <div>
                <div className="btn-group btn-group-justified" role="group" aria-label="..." id="button-grp">
                    <div className="btn-group" role="group">
                        <a><button  type="button" className="btn btn-default">Brott</button></a>
                    </div>
                    <div className="btn-group" role="group">
                        <a ><button  type="button" className="btn btn-default">Statistik</button></a>
                    </div>
                </div>
            </div>
        );
    }
}


export default SideBar;