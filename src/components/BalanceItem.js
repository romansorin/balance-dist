import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BalanceItem extends Component {
	// Take the total balance of the account and split it up into the ideal spending limits
	// for each account
	distributeBalance = () => {
		return this.props.total * (this.props.balance.account.percentage / 100);
	}

	// Edit the distribution for an account
	editPercentage = (input) => {
		
	}

	// Edit the balance of an account
	editBalance = () => {

	}




	render() {
		return (
			<div className="box">
				<div className="columns is-multiline">
					<div className="column is-full">
						<h1 className="title is-4">Account Name: { this.props.balance.account.title }</h1>
					</div>
					<div className="column is-full">
						<div className="field">
							<label for="distBal" className="label">Distributed Balance ({ this.props.balance.account.percentage }%)</label>
								<div className="control">
									<p>${ this.distributeBalance() }</p>
								</div>
						</div>
					</div>
					<div className="column is-full">
						<div className="field">
							<label for="currentBal" className="label">Current Balance</label>
								<div className="control">
									<h4>${ this.props.balance.balance }</h4>
								</div>
						</div>
					</div>
				</div>
				<button onClick={this.editPercentage(.4)}>Change %</button>
			</div>
		);
	}
}

BalanceItem.propTypes = {
	balance: PropTypes.object.isRequired
}

export default BalanceItem;