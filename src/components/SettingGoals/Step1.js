import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {getLoginLoadingState, getUserAuthState, getLoginErrorState,} from '../store/reducers/selectors/LoginSelectors';
// import { ValidateLogin } from '../store/reducers/actions/LoginActions';
import { BaseTextInput } from '../Form';
import { BaseNumberInput } from '../Form';
import { BaseDateInput } from '../Form';

// Step 1 of 2 - multi step form
class Step1 extends Component {
	render() {
		if (this.props.currentStep !== 2) {
			return null;
		}
		return (
			<>
				<div className='settinggoals-container'>
					<p className='step-counter'>
						Stap {this.props.currentStep - 1} van 2
					</p>

					{/* Question 1 */}
					<div className='container'>
						<label
						// htmlFor='pages'
						>
							Jouw doelen worden gedeeld met:
						</label>
						<BaseTextInput
							className='form-control'
							id='nameRecruiter'
							name='nameRecruiter'
							type='text'
							placeholder='Naam van jouw Recruiter'
							value={this.props.nameRecruiter}
							onChange={this.props.handleChange}
						/>
					</div>

					{/* Question 2 */}
					<div className='container'>
						<label
						// htmlFor='pages'
						>
							Datum examen:
						</label>
						<BaseDateInput
							className='form-control'
							id='date'
							name='date'
							type='date'
							placeholder='Datum'
							value={this.props.date}
							onChange={this.props.handleChange}
						/>
					</div>

					{/* Question 3 */}
					<div className='container'>
						<label
						// htmlFor='pages'
						>
							Welke dagen ben je beschikbaar voor je studie?
						</label>
						<div className='container-pushbuttons'>
							<label className='pushbuttons'>
								<input
									type='checkbox'
									value='maandag'
									// htmlFor='setStudyDays'
									name='setStudyDays'
									id='setStudyDays'
									checked={this.props.setDays}
									onChange={this.props.setStudyDaysChange}
								/>
								<div>Ma</div>
							</label>

							{/* Options for question 3 */}
							<label className='pushbuttons'>
								<input
									type='checkbox'
									value='dinsdag'
									// htmlFor='setStudyDays'
									name='setStudyDays'
									id='setStudyDays'
									checked={this.props.setDays}
									onChange={this.props.setStudyDaysChange}
								/>
								<div>Di</div>
							</label>

							<label className='pushbuttons'>
								<input
									type='checkbox'
									value='woensdag'
									// htmlFor='setStudyDays'
									name='setStudyDays'
									id='setStudyDays'
									checked={this.props.setDays}
									onChange={this.props.setStudyDaysChange}
								/>
								<div>Wo</div>
							</label>

							<label className='pushbuttons'>
								<input
									type='checkbox'
									value='donderdag'
									// htmlFor='setStudyDays'
									name='setStudyDays'
									id='setStudyDays'
									checked={this.props.setDays}
									onChange={this.props.setStudyDaysChange}
								/>
								<div>Do</div>
							</label>

							<label className='pushbuttons'>
								<input
									type='checkbox'
									value='vrijdag'
									// htmlFor='setStudyDays'
									name='setStudyDays'
									id='setStudyDays'
									checked={this.props.setDays}
									onChange={this.props.setStudyDaysChange}
								/>
								<div>Vr</div>
							</label>

							<label className='pushbuttons'>
								<input
									type='checkbox'
									value='zaterdag'
									// htmlFor='setStudyDays'
									name='setStudyDays'
									id='setStudyDays'
									checked={this.props.setDays}
									onChange={this.props.setStudyDaysChange}
								/>
								<div>Za</div>
							</label>

							<label className='pushbuttons'>
								<input
									type='checkbox'
									value='zondag'
									// htmlFor='setStudyDays'
									name='setStudyDays'
									id='setStudyDays'
									checked={this.props.setDays}
									onChange={this.props.setStudyDaysChange}
								/>
								<div>Zo</div>
							</label>
						</div>
					</div>

					{/* Question 4 */}
					<div className='container advice'>
						<label
						// htmlFor='pages'
						>
							Hoeveel uren per studiedag ben je beschikbaar?
						</label>

						<BaseNumberInput
							className='form-control'
							id='studyHours'
							name='studyHours'
							type='number'
							// placeholder=''
							value={this.props.studyHours} // Prop: The email input data
							onChange={this.props.handleChange} // Prop: Puts data into state
						/>
						<label
						//  htmlFor='pages'
						>
							uren
						</label>
					</div>
				</div>
			</>
		);
	}
}

export default Step1;
