import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState,} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import { BaseTextInput } from '../Form';
import { BaseNumberInput } from '../Form';
import { BaseDateInput } from '../Form';
import { ToggleButton } from '../Button';
import { FiCalendar } from 'react-icons/fi';

// import { Popup } from '../components/Popup';
// import { Spinner } from '../components/Spinner';

class Start extends Component {
	render() {
		if (this.props.currentStep !== 1) {
			return null;
		}
		return (
			<>
				<div className='settinggoals-container'>
					<div className='onboarding-page'>
						<FiCalendar />
						<div>Je doelen vaststellen voor ITIL 3</div>
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
