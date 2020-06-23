import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
// import { BaseTextInput } from '../components/Form';
import { BaseNumberInput } from '../Form';
import { BaseTimeInput } from '../Form';
import Switch from 'react-switch';

// Step 2 of 2 - multi step form
class Step2 extends Component {
	render() {
		if (this.props.currentStep !== 3) {
			return null;
		}
		return (
			<>
				<div className='settinggoals-container'>
					<p className='step-counter'>
						Stap {this.props.currentStep - 1} van 2
					</p>

					{/* Question 5 */}
					<div className='container advice'>
						<label htmlFor='pages' className='question'>
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
						<label htmlFor='pages'>pagina&apos;s</label>
					</div>

					{/* Question 6 */}
					<div className='container'>
						<label className='question' htmlFor='pages'>
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
							Herinner mij om te studeren
						</label>

						<p>
							Selecteer een tijd wanneer je een melding wilt
							ontvangen.
						</p>

						{/* Answer for Question 6 */}
						<label className='studyday-label'>Maandag</label>
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

					{/* Question 7 */}
					<div className='container'>
						<label className='question'>
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
							Hetzelfde tijdstip voor elke studiedag herinnering
						</label>

						{/* This toggle has to toggle BaseTimeInput */}
						<label className='studyday-label'>Tijdstip</label>

						{/* Answer for Question 7 */}
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
