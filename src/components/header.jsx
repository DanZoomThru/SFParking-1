import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <h2 className="text-center">PARKING APP</h2>
        <div className="search">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for parking spots near..." />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
      </nav>
    );
  }
};
