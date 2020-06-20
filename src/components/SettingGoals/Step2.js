import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
// import { BaseTextInput } from '../components/Form';
import { BaseNumberInput } from '../Form';
import { BaseTimeInput } from '../Form';
// import { Popup } from '../components/Popup';
// import { Spinner } from '../components/Spinner';
// import Toggle from '../Toggle';
import Switch from 'react-switch';

class Step2 extends Component {
	render() {
		if (this.props.currentStep !== 3) {
			return null;
		}
		return (
			<>
				<div className='settinggoals-container'>
					<div className='container advice'>
						<label htmlFor='pages'>
							Ons advies voor ITIL 3, lees elke studiedag:
							{/* ipv ITIL 3 --> {this.state.courseName} */}
						</label>
						<BaseNumberInput
							className='form-control'
							id='pageNumbers'
							name='pageNumbers'
							type='number'
							value={this.props.pageNumbers}
							onChange={this.props.handleChange}
						/>
						<label htmlFor='pages'>pagina's</label>
					</div>

					<div className='container timereminders'>
						<label htmlFor='pages'>
							Herinner mij om te studeren
						</label>

						{/* map over all inputfields max < 7 */}
						<Switch
							checked={this.props.showStudyReminder}
							onColor='#FC7928'
							ofColor='#717171'
							uncheckedIcon={false}
							checkedIcon={false}
							handleDiameter={18}
							width={60}
							className='toggle'
							onChange={this.props.setStudyReminderChange}
						/>

						<p>
							Selecteer een tijd wanneer je een melding wilt
							ontvangen.{' '}
						</p>


						
						{/* This toggle has to toggle BaseTimeInput and multiply (sync with {studyDays.length} ) */}
						<BaseTimeInput
							id='studyTimeDay'
							name='studyTimeDay'
							type='time'
							placeholder='10:00'
							value={this.props.studyTimeDay}
							onChange={this.props.handleChange}
						/>
					</div>

					<div className='container timereminders'>
						<label>
							Hetzelfde tijdstip voor elke studiedag herinnering
						</label>

						<Switch
							checked={this.props.setReminderTimeForAllDays}
							onColor='#FC7928'
							ofColor='#717171'
							uncheckedIcon={false}
							checkedIcon={false}
							handleDiameter={18}
							width={60}
							className={'toggle'}
							onChange={this.props.setReminderTimeChange}
						/>
						{/* This toggle has to toggle BaseTimeInput */}
						<BaseTimeInput
							id='sameStudyTimeDay'
							name='sameStudyTimeDay'
							type='time'
							placeholder='00:00'
							value={this.props.setReminderTimeForAllDays} // Prop: The email input data
							onChange={this.props.handleChange} // Prop: Puts data into state
						/>
					</div>
				</div>
			</>
		);
	}
}
export default Step2;
