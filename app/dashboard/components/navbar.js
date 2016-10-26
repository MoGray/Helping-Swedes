import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          regions :    ['Hela-Sverige',
                        'Blekinge',
                        'Dalarna',
                        'Gotland',
                        'Gävleborg',
                        'Halland',
                        'Jämtland',
                        'Jönköping',
                        'Kalmar',
                        'Kronoberg',
                        'Norrbotten',
                        'Skåne',
                        'Stockholm',
                        'Södermanland',
                        'Uppsala',
                        'Värmland',
                        'Västerbotten',
                        'Västernorrland',
                        'Västmanland',
                        'Västra Götaland',
                        'Örebro',
                        'Östergötland']
        }
    }


  render() {

      var regionList = this.state.regions.map(function(region, index){
          return(<MenuItem key={index} value={region}>{region}</MenuItem>)
      });

    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Brott</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <ul class="dropdown-menu">
                                    <DropdownButton title ="Välj Län" id="bg-nested-dropdown">
                                            {regionList}
                                    </DropdownButton>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}

export default NavBar;