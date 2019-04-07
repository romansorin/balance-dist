import React, { Component } from 'react';
import BalanceItem from './BalanceItem';
import PropTypes from 'prop-types';

export class Balance extends Component {
	render() {
		return this.props.balances.map((balance) => (
			<BalanceItem key={balance.id} balance={balance} total={this.props.total} />
		));
	}
}

Balance.propTypes = {
	balances: PropTypes.array.isRequired
}

export default Balance;