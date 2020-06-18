import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState,} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import { BaseTextInput } from '../Form';
import { BaseNumberInput } from '../Form';
import { BaseDateInput } from '../Form';
import { ToggleButton } from '../Button';
import { FaCheckCircle } from 'react-icons/fa';
// import { Popup } from '../components/Popup';
// import { Spinner } from '../components/Spinner';

// End page of setting goals
class End extends Component {
	render() {
		if (this.props.currentStep !== 4) {
			return null;
		}
		return (
			<>
				<div className='settinggoals-container'>
					<div className='onboarding-page'>
						<FaCheckCircle className='onboarding-icon' />
						<div>Goed bezig! Jouw doelen zijn vastgesteld.</div>
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
