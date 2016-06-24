import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <h2 className="text-center">PARKING APP</h2>
      </nav>
    );
  }
};
