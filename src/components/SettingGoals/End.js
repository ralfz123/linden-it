import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState,} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import { BaseTextInput } from '../Form';
import { BaseNumberInput } from '../Form';
import { BaseDateInput } from '../Form';
import { ToggleButton } from '../Button';
import { FaCheckCircle } from 'react-icons/fa';
import { SecondaryButton } from '../Button';
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
						<h2>Goed bezig! Jouw doelen zijn vastgesteld.</h2>
						<div>Happy learning!</div>
						<p>
							Je kunt je doelen altijd nog aanpassen via de
							agenda.
						</p>

						{/* <SecondaryButton
							to='/course'
							className='onboarding-button'
							type='submit'
							onClick={this._next}
							label='Start cursus'
						/> */}
					</div>
				</div>
			</>
		);
	}
}

export default End;
