import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState,} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import { FiCalendar } from 'react-icons/fi';

// Start page (onboarding)
class Start extends Component {
	render() {
		if (this.props.currentStep !== 1) {
			return null;
		}
		return (
			<>
				<div className='settinggoals-container'>
					<div className='container onboarding-page'>
						<FiCalendar className='onboarding-icon' />
						<h2>Je doelen vaststellen voor ITIL 3</h2>
						<p>
							Voordat je aan de cursus kan beginnen, stel je eerst
							je doelen vast, die automatisch met je recruiter
							worden gedeeld.
						</p>
					</div>
				</div>
			</>
		);
	}
}

export default Start;
