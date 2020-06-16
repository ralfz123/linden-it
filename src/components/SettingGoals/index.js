import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { colors } from '../../GlobalStyle';
// import Overlay from 'react-overlays/Overlay';
import Step1 from './Step1';
import Step2 from './Step2';

// const StyledOverlay = styled.div`
// 	background-color: green;
// `;

class Goals extends Component {
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
		let currentStep = this.state.currentStep
		currentStep = currentStep >= 2 ? 3 : currentStep + 1
		this.setState({
			currentStep: currentStep
		})
	};

	_prev() {
		let currentStep = this.state.currentStep
		currentStep = currentStep <= 1 ? 1 : currentStep - 1
		this.setState({
			currentStep: currentStep
		})
	};

	// get next button
	get previousButton() {
		let currentStep = this.state.currentStep;
		if (currentStep !==1) {
			return(
				<button
				className=''
				type='button'
				onClick={this._prev}>
					Previous
				</button>
			)
		}
		return null;
	};

	get nextButton(){
		let currentStep = this.state.currentStep;
		if(currentStep < 3){
		  return (
			<button 
			  className='' 
			  type='button'
			  onClick={this._next}>
			Next
			</button>        
		  )
		}
		return null;
	  };


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
			</>
		);
	}
};

export default Goals;
