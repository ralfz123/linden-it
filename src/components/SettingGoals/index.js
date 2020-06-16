import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { colors } from '../../GlobalStyle';
// import Overlay from 'react-overlays/Overlay';
import Step1 from './Step1';
import Step2 from './Step2';
import { FaCheckCircle } from 'react-icons/fa';
import { SecondaryButton } from '../Button';

// const StyledOverlay = styled.div`
// 	background-color: green;
// `;

class Goals extends Component {
	constructor(props) {
		super(props);
		// Bind new functions for next and previous
		this._next = this._next.bind(this);
		this._prev = this._prev.bind(this);
	}

	state = {
		currentStep: 1,
		nameRecruiter: '',
		date: '',
		studyDays: '',
		studyHours: '',
		pageNumbers: '',
		studyTimeDay: '',
		sameStudyTimeDay: '',
	};

	_next() {
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 2 ? 3 : currentStep + 1;
		this.setState({
			currentStep: currentStep,
		});
	}

	_prev() {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;
		this.setState({
			currentStep: currentStep,
		});
	}

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
		if (currentStep < 3) {
			return (
				<button className='' type='button' onClick={this._next}>
					Volgende stap
				</button>
			);
		}
		return null;
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

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
		} = this.state;
	};

	render() {
		return (
			<>
				{/* <OnboardingPage /> // not started */}
				<p>Stap {this.state.currentStep} van 2</p>

				<form onSubmit={this.handleSubmit}>
					<Step1
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						nameRecruiter={this.state.nameRecruiter}
						date={this.state.date}
						studyDays={this.state.studyDays}
						studyHours={this.state.studyHours}
					/>

					<Step2
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						pageNumbers={this.state.pageNumbers}
						studyTimeDay={this.state.studyTimeDay}
						sameStudyTimeDay={this.state.sameStudyTimeDay}
					/>

					{this.previousButton}
					{this.nextButton}
				</form>

				<div className='finish-page'>
					<FaCheckCircle />
					<div>Goed bezig! Jouw doelen zijn vastgesteld.</div>
					<p>Happy learning!</p>
					<p>Je kunt je doelen altijd nog aanpassen via de agenda.</p>
					<SecondaryButton label='Start cursus' />
				</div>
			</>
		);
	}
}

export default Goals;
