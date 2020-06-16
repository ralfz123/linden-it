import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState,} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import { BaseTextInput } from '../Form';
import { BaseNumberInput } from '../Form';
import { PrimaryButton } from '../Button';
// import { Popup } from '../components/Popup';
// import { Spinner } from '../components/Spinner';

class Step1 extends Component {
	render() {
		if (this.props.currentStep !== 1) {
			return null;
		}
		return (
			<>
				<div className='form-group'>
					<label htmlFor='pages'>
						Jouw doelen worden gedeeld met:
					</label>
					<BaseTextInput
						className='form-control'
						id='nameRecruiter'
						name='nameRecruiter'
						type='text'
						placeholder='Naam van jouw Recruiter'
						value={this.props.nameRecruiter} // Prop: The email input data
						onChange={this.props.handleChange} // Prop: Puts data into state
					/>
				</div>

				<div className='section'>
					<h3>Datum examen:</h3>
					<input
						className='form-control'
						id='date'
						name='date'
						type='date'
						placeholder='Datum'
						value={this.props.date} // Prop: The email input data
						onChange={this.props.handleChange} // Prop: Puts data into state
					/>
				</div>

				<div className='section'>
					<h3>Welke dagen ben je beschikbaar voor je studie?</h3>
					
					{/* round toggle buttons monday-sunday */}
					<input
						className='form-control'
						id='studyDays'
						name='date'
						type='radio'
						// placeholder=''
						value={this.props.studyDays} // Prop: The email input data
						onChange={this.props.handleChange} // Prop: Puts data into state
					/>
				</div>

				<div className='button'>
					<h3>Hoeveel uren per studiedag ben je beschikbaar?</h3>

					<BaseNumberInput
						className='form-control'
						id='studyHours'
						name='studyHours'
						type='number'
						value={this.props.studyHours} // Prop: The email input data
						onChange={this.props.handleChange} // Prop: Puts data into state
					/>
				</div>

				{/* <PrimaryButton label='Volgende stap'/> */}
			</>
		);
	}
}

export default Step1;
