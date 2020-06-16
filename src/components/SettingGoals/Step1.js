import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState,} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import { BaseTextInput } from '../Form';
import { BaseNumberInput } from '../Form';
import { BaseDateInput } from '../Form';
import { PrimaryButton } from '../Button';
import { ToggleButton } from '../Button';
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
					<label htmlFor='pages'>Datum examen:</label>
					<BaseDateInput
						className='form-control'
						id='date'
						name='date'
						type='date'
						placeholder='Datum'
						value={this.props.date} // Prop: The email input data
						onChange={this.props.handleChange} // Prop: Puts data into state
					/>
				</div>

				<div className='container-pushbuttons'>
					<label htmlFor='pages'>
						Welke dagen ben je beschikbaar voor je studie?
					</label>

					<label className='pushbuttons'>
						<input
							type='checkbox'
							value='maandag'
							htmlFor='studyDays'
							name='studyDays'
						/>
						<div>Ma</div>
					</label>

					<label className='pushbuttons'>
						<input
							type='checkbox'
							value='dinsdag'
							htmlFor='studyDays'
							name='studyDays'
						/>
						<div>Di</div>
					</label>

					<label className='pushbuttons'>
						<input
							type='checkbox'
							value='woensdag'
							htmlFor='studyDays'
							name='studyDays'
						/>
						<div>Wo</div>
					</label>

					<label className='pushbuttons'>
						<input
							type='checkbox'
							value='donderdag'
							htmlFor='studyDays'
							name='studyDays'
						/>
						<div>Do</div>
					</label>

					<label className='pushbuttons'>
						<input
							type='checkbox'
							value='vrijdag'
							htmlFor='studyDays'
							name='studyDays'
						/>
						<div>Vr</div>
					</label>

					<label className='pushbuttons'>
						<input
							type='checkbox'
							value='zaterdag'
							htmlFor='studyDays'
							name='studyDays'
						/>
						<div>Za</div>
					</label>

					<label className='pushbuttons'>
						<input
							type='checkbox'
							value='zondag'
							htmlFor='studyDays'
							name='studyDays'
						/>
						<div>Zo</div>
					</label>
				</div>

				<div className='button'>
					<label htmlFor='pages'>
						Hoeveel uren per studiedag ben je beschikbaar?
					</label>

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
