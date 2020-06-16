import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
// import { BaseTextInput } from '../components/Form';
import { BaseNumberInput } from '../Form';
import { BaseTimeInput } from '../Form';
import { PrimaryButton } from '../Button';
// import { Popup } from '../components/Popup';
// import { Spinner } from '../components/Spinner';

class Step2 extends Component {
	render() {
		if (this.props.currentStep !== 1) {
			return null;
		}
		return (
			<>
				<div className='form-group'>
					<label htmlFor='pages'>
						Ons advies voor ITIL 3, lees elke studiedag:
					</label>
					<input
						className='form-control'
						id='pageNumbers'
						name='pageNumbers'
						type='number'
						// placeholder=''
						value={this.props.pageNumbers} // Prop: The email input data
						onChange={this.props.handleChange} // Prop: Puts data into state
					/>
					<label htmlFor='pages'>pagina's</label>
				</div>

				<div className='section'>
					<label htmlFor='pages'>
						Herinner mij om te studeren
					</label>
					<PrimaryButton label='toggle' />
					<p>
						Selecteer een tijd wanneer je een melding wilt
						ontvangen.{' '}
					</p>

					{/* map over all inputfields max < 7 */}
					<BaseTimeInput
						id='studyTimeDay'
						name='studyTimeDay'
						type='time'
						placeholder='10:00'
						value={this.props.studyTimeDay} // Prop: The email input data
						onChange={this.props.handleChange} // Prop: Puts data into state
					/>
				</div>

				<div className='button'>
					<h3>Hetzelfde tijdstip voor elke studiedag herinnering</h3>
					<PrimaryButton label='toggle' />
				</div>

				<BaseTimeInput
					id='sameStudyTimeDay'
					name='sameStudyTimeDay'
					type='time'
					placeholder='00:00'
					value={this.props.sameStudyTimeDay} // Prop: The email input data
					onChange={this.props.handleChange} // Prop: Puts data into state
				/>
				{/* <PrimaryButton label='Doelen opslaan'/> */}
			</>
		);
	}
}
export default Step2;
