import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StyledPanel, {StyledAccordion} from './StyledAccordion';
import {ChapterTags} from '../Tags';
import { SecondaryButton } from '../Button';

export class Panel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0,
		};
	}

	// componentDidMount() {
	// 	window.setTimeout(() => {
	// 		const el = ReactDOM.findDOMNode(this);
	// 		const height = el.querySelector('.panel__inner').scrollHeight;
	// 		this.setState({
	// 			height,
	// 		});
	// 	}, 333);
	// }

	render() {
		const {
			id,
			title,
			tag,
			pages,
			label,
			activeTab,
			index,
			activateTab,
			activateNextTab,
		} = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		return (
			<StyledPanel active={isActive}>
				<PanelHeader title={title} tag={tag} onClick={activateTab}>
					{tag}
				</PanelHeader>
				<PanelContent pages={pages}>
					<PanelFooter title={title} id={id}>
						<SecondaryButton
							label={label}
							onClick={activateNextTab}
						>
							{label}
						</SecondaryButton>
					</PanelFooter>
				</PanelContent>
				

				{/* {label && (
					<PanelFooter title={title} id={id}>
						<SecondaryButton label={label} onClick={activateTab}>
							{label}
						</SecondaryButton>
					</PanelFooter>
				)} */}
			</StyledPanel>
		);
	}
}



// Proptypes Accordion
Panel.propTypes = {
	activateTab: PropTypes.any,
	activeTab: PropTypes.any,
	content: PropTypes.any,
	contentTitle: PropTypes.any,
	id: PropTypes.any,
	index: PropTypes.any,
	label: PropTypes.any,
	onClick: PropTypes.func,
	pages: PropTypes.any,
	path: PropTypes.any,
	tag: PropTypes.any,
	title: PropTypes.any,
};

class Accordion extends React.Component {
	static defaultProps = {
		chapters: [
			{
				id: 1,
				title: 'configure language packs',
				tag: 'NEW',
				pages: '32-34',
				label: 'Hoofdstuk afronden',
			},
		],
	};
	constructor(props) {
		super(props);

		this.state = {
			activeTab: 0,
		};
		this.activateTab = this.activateTab.bind(this);
		this.activateNextTab = this.activateTab.bind(this);
	}

	activateTab(index) {
		this.setState((prev) => ({
			activeTab: prev.activeTab === index ? -1 : index,
		}));
	}
	activateNextTab(index) {
		this.setState((next) => ({
			activeTab: next.activeTab === index ? +1 : index,
		}));
	}
	// const {
	// 			id,
	// 			title,
	// 			tag,
	// 			pages,
	// 			label,
	// 			activeTab,
	// 			index,
	// 			activateTab,
	// 		} = this.props;
	render() {
		const { chapters } = this.props;
		const { activeTab } = this.state;
		return (
			<StyledAccordion className='accordion' role='tablist'>
				{chapters.map((chapter, index) => (
					<Panel
						key={index}
						activeTab={activeTab}
						index={index}
						title={chapter.title}
						pages={chapter.pages}
						label={chapter.label}
						tag={chapter.tag}
						{...chapter}
						activateTab={this.activateTab.bind(null, index)}
						activateNextTab={this.activateNextTab.bind(null, index + 1)}
					/>
				))}
			</StyledAccordion>
		);
	}
}
export default Accordion;
// Proptypes BaseAccordion
Accordion.propTypes = {
	children: PropTypes.any,
};


export const PanelHeader = ({tag ,title}) => {
	return (
		<div className='panel-header'>
			{tag && <ChapterTags>{tag}</ChapterTags>}

			<p>{title}</p>
		</div>
	);
};

// Proptypes AccordionHeader
PanelHeader.propTypes = {
	tag: PropTypes.string,
	title: PropTypes.string
};


export const PanelContent = ({pages, contentTitle, children}) => {
	return (
		<div className="panel-content">
			<p><b>{contentTitle}</b></p>
			<p>
				{pages}
			</p>
			{children}
		</div>
	);
};

// Proptypes panelContent
PanelContent.propTypes = {
	content: PropTypes.string,
	contentTitle: PropTypes.any,
};


export const PanelFooter = ({children}) => {
	return (
		<div className='panel-footer'>
			{children}
		</div>
	);
};


PanelFooter.propTypes = {
	children: PropTypes.any
};