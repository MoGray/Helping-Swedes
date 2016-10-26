import React from 'react';
import NavBar from './components/navbar'
import Map from './components/map'
import SideBar from './components/sidebar'

require('./App.css');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <NavBar />
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <Map />
            </div>
            <div className="col-md-5 bg-color">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;