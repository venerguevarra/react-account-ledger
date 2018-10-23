import React, { Component } from 'react';
import './App.css';
import AmountBox from './components/AmountBox';
import AccountEntryForm from './components/AccountEntryForm';
import AccountLedger from './components/AccountLedger';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    };
  }

  recordCreateHandler = (data) => {
    let entries = this.state.entries;
    entries.push(data);

    this.setState({
      entries: entries
    });
  }

  recordDeleteHandler = (id) => {
    const newEntries = this.state.entries.filter(entry => entry.id !== id);
    this.setState({
      entries: newEntries
    });

  };

  recordEditHandler = (id) => {
  };

  render() {
    return (
      <div class="App container">
        <AmountBox/>
        <AccountEntryForm
          recordCreateHandler={this.recordCreateHandler}/>
        <hr/>
        <AccountLedger
          entries={this.state.entries}
          recordDeleteHandler={this.recordDeleteHandler}
          recordEditHandler={this.recordEditHandler}/>
      </div>
    );
  }
}

export default App;
