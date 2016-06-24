import React from 'react';

import Header from './header.jsx';
import ToDoList from './toDoList.jsx';
import MainMap from './mainMap.jsx';
import Footer from './footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainMap />
      </div>
    );
  }
};