import React, { Component } from 'react';
import Balance from './components/Balance';

class App extends Component {

state = {
	total: 100,
	balances: [
		{
			id: 1,
			balance: 20,
			account: {
				title: 'Savings',
				percentage: 50,
			}
			
		},
		{
			id: 2,
			balance: 30,
			account: {
				title: 'Personal',
				percentage: 20
			}
		},
		{
			id: 3,
			balance: 40,
			account: {
				title: 'Business',
				percentage: 30
			}
		},
	]
}

  render() {
    return (
      <div className="App">
      	<h1>Total Balance: ${this.state.total}</h1>
      	<Balance balances={this.state.balances} total={this.state.total} />
      </div>
    );
  }
}

export default App;
