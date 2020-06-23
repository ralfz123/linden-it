import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState,} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import { FaCheckCircle } from 'react-icons/fa';

// End page of setting goals
class End extends Component {
	render() {
		if (this.props.currentStep !== 4) {
			return null;
		}
		return (
			<>
				<div className='settinggoals-container'>
					<div className='container onboarding-page'>
						<FaCheckCircle className='onboarding-icon' />
						<h2>Goed bezig! Jouw doelen zijn vastgesteld.</h2>
						<p>Happy learning!</p>
						<p>
							Je kunt je doelen altijd nog aanpassen via de
							agenda.
						</p>
					</div>
				</div>
			</>
		);
	}
}

export default End;
