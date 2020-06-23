import React, { Component } from 'react';
import Start from './Start';
import Step1 from './Step1';
import Step2 from './Step2';
import End from './End';
import { PrimaryButton } from '../Button';
import { SecondaryButton } from '../Button';
import Header from '../Header';
import { ContentOverlay } from '../Content/Content';

// Index page where all pages are included and state - multistep form
class Goals extends Component {
	state = {
		currentStep: 1,
		nameRecruiter: '',
		date: '',
		setStudyDays: '',
		studyHours: '',
		pageNumbers: '',
		studyTimeDay: '',
		sameStudyTimeDay: '',
		showStudyReminder: false,
		setReminderTimeForAllDays: false,
	};

	setReminderTimeChange = (bool) =>
		this.setState({ setReminderTimeForAllDays: bool });

	setStudyReminderChange = (bool) =>
		this.setState({ showStudyReminder: bool });

	setStudyDaysChange = (bool) => this.setState({ setStudyDays: Array });

	// Next step
	_next = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 3 ? 4 : currentStep + 1;

		this.setState({
			currentStep: currentStep,
		});
	};

	// Previous step
	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;

		this.setState({
			currentStep: currentStep,
		});
	};

	// get previous button
	get previousButton() {
		let currentStep = this.state.currentStep;
		if (currentStep !== 1) {
			return (
				<button className='' type='button' onClick={this._prev}>
					Terug
				</button>
			);
		}
		return null;
	}

	// get next button
	get nextButton() {
		let currentStep = this.state.currentStep;
		if (currentStep == 1) {
			return (
				<SecondaryButton
					className='onboarding-button'
					type='button'
					onClick={this._next}
					label='Doelen vaststellen'
				/>
			);
		} else if (currentStep == 2) {
			return (
				<PrimaryButton
					className='onboarding-button'
					type='button'
					onClick={this._next}
					label='Volgende stap'
				/>
			);
		} else if (currentStep == 3) {
			return (
				<PrimaryButton
					className='onboarding-button'
					type='submit'
					onClick={this._next}
					label='Doelen opslaan'
				/>
			);
		} else if (currentStep == 4) {
			return (
				<SecondaryButton
					className='onboarding-button'
					type='submit'
					onClick={this.props.onRequestClose}
					label='Start cursus'
				/>
			);
		}
		return null;
	}
	// Function to enter values to the inputs
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	// Function to submit the form
	handleSubmit = (event) => {
		event.preventDefault(event);
		const {
			currentStep,
			nameRecruiter,
			date,
			studyDays,
			studyHours,
			pageNumbers,
			studyTimeDay,
			sameStudyTimeDay,
			showStudyReminder,
			setReminderTimeForAllDays,
			setDays,
		} = this.state;
	};

	render() {
		const {
			currentStep,
			nameRecruiter,
			date,
			studyDays,
			studyHours,
			setDaysChange,
			studyTimeDay,
			sameStudyTimeDay,
			setReminderTimeForAllDays,
			showStudyReminder,
			pageNumbers,
			setDays,
			setStudyDaysChange,
		} = this.state;
		return (
			<>
				<Header
					title={`Doellen vaststellen`}
					prevStep={this._prev}
					history={this.props.history}
					small={true}
					className={'overlay-header'}
				/>

				{/* Form included al pages */}
				<ContentOverlay className={`overlay-` + currentStep}>
					<form
						className={`doelen-vaststellen`}
						onSubmit={this.handleSubmit}
					>
						<Start
							currentStep={currentStep}
							handleChange={this.handleChange}
						/>

						<Step1
							currentStep={currentStep}
							handleChange={this.handleChange}
							nameRecruiter={nameRecruiter}
							date={date}
							studyDays={studyDays}
							setStudyDaysChange={setStudyDaysChange}
							studyHours={studyHours}
						/>

						<Step2
							currentStep={currentStep}
							handleChange={this.handleChange}
							pageNumbers={pageNumbers}
							studyTimeDay={studyTimeDay}
							sameStudyTimeDay={sameStudyTimeDay}
							setReminderTimeForAllDays={
								setReminderTimeForAllDays
							}
							showStudyReminder={showStudyReminder}
							setStudyReminderChange={this.setStudyReminderChange}
							setReminderTimeChange={this.setReminderTimeChange}
						/>

						<End
							currentStep={currentStep}
							handleChange={this.handleChange}
						/>
						{this.nextButton}
					</form>
				</ContentOverlay>
			</>
		);
	}
}

export default Goals;
