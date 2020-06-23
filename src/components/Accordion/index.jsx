import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StyledPanel, {StyledAccordion} from './StyledAccordion';
import {ChapterTags} from '../Tags';
import { SecondaryButton } from '../Button';
import { FiUsers, FiVideo, FiFileText, FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { colors, sizes, addAlpha } from '../../GlobalStyle.js';

// this component uses framer.motion for animations. 

export class Panel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0,
		};
	}

	render() {
		const {
			id,
			title,
			tag,
			pages,
			label,
			activePanel,
			index,
			activatePanel,
			activateNextPanel,
			isOpen,
			onClick,
		} = this.props;
		const { height } = this.state;

		const isActive = activePanel === index;
		return (
			//  the panel header will always be visible even when the panel is closed. 
			// if the panel isActive, other panels will close. 
			<StyledPanel animate active={isActive}>
				<PanelHeader 
					animate
					title={title}
					tag={tag}
					onClick={activatePanel}
				>
					<motion.div>
						<ChapterTags animate>{tag}</ChapterTags>
						<motion.p
							animate
							style={{
								color:
									index === activePanel
										? colors.primary
										: colors.gray,
							}}
							className={`chapter-title ${
								index === activePanel && 'active'
							}`}
						>
							{title}
						</motion.p>
					</motion.div>
					<motion.div
						animate={{
							transition: index === activePanel ? 1 : 0,
							rotate: index === activePanel ? 180 : 0,
						}}
						className={`toggle-icon 
							${index === activePanel && 'open'}`}// if the panel is open/closed another icon will be displayed
					>
						{index === activePanel ? <FiMinus /> : <FiPlus />}
						
					</motion.div>
				</PanelHeader>
					
				<AnimatePresence exitBeforeEnter initial={false}> 
					{/* the panel content will be visible when the pane; header isActive } */}
					{isActive && (
						<PanelContent animate key={activePanel} pages={pages}> 
							<motion.p animate className='chapter-description'>
								Beschrijving van dit hoofdstuk
							</motion.p>
							<motion.ul animate className='chapter-resources'>
								<motion.li>
									<FiFileText />
									<motion.span animate>
										Pagina {pages}
									</motion.span>
								</motion.li>
								<motion.li>
									<FiVideo />
									<motion.span animate>
										Bekijk Video
									</motion.span>
								</motion.li>
								<motion.li animate>
									<FiUsers />
									<motion.span animate>
										Tips van collegas
									</motion.span>
								</motion.li>
							</motion.ul>
							<PanelFooter animate title={title} id={id}>
								<SecondaryButton
									animate
									label={label}
									onClick={activateNextPanel}
								>
									{label}
								</SecondaryButton>
							</PanelFooter>
						</PanelContent>
					)}
				</AnimatePresence>
			</StyledPanel>
		);
	}
}
export const PanelHeader = ({ children, onClick }) => {
	return (
		<motion.div animate onClick={onClick} className='panel-header'>
			{children}
		</motion.div>
	);
};

// Proptypes AccordionHeader
PanelHeader.propTypes = {
	children: PropTypes.any,
	onClick: PropTypes.func
};

export const PanelContent = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='panel-content'
		>
			{children}
		</motion.div>
	);
};

// Proptypes panelContent
PanelContent.propTypes = {
	children: PropTypes.any,
};

export const PanelFooter = ({ children }) => {
	return <motion.div animate className='panel-footer'>{children}</motion.div>;
};

PanelFooter.propTypes = {
	children: PropTypes.any,
};


// Proptypes Accordion
Panel.propTypes = {
	activatePanel: PropTypes.any,
	activePanel: PropTypes.any,
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
			activePanel: null,
		};
		this.activatePanel = this.activatePanel.bind(this);
		this.activateNextPanel = this.activatePanel.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		const { chapters } = this.props;
		
		const index = chapters.findIndex((chapter) => chapter.tag === 'IN PROGRESS');
		// finds 
		if (prevState.activePanel !== index && prevProps.chapters !== chapters)
			this.setState({ activePanel: index });
		console.log('this' + index);
	}
	// activatePanel will be called when clicked op the + or - icon in panel header.
	activatePanel(index) {
		this.setState((prev) => ({
			activePanel: prev.activePanel === index ? -1 : index,
		}));
	}
	// activate Next panel will be callen when someone clicks on the Hoofdstuk afronden button.
	activateNextPanel(index) {
		this.setState((next) => ({
			activePanel: next.activePanel === index ? +1 : index,
		}));
	}
	
	render() {
		const { chapters } = this.props;
		const { activePanel } = this.state;
		return (
			<AnimateSharedLayout>
				<StyledAccordion
					animate
					className='accordion'
					transition={{ ease: 'easeOut' }}
					role='tablist'
				>
					{/* the map loop is used to render all chapters of a course */}
					{chapters.map((chapter, index) => (
						<Panel
							key={index}
							activePanel={activePanel}
							index={index}
							title={chapter.title}
							pages={chapter.pages}
							label={chapter.label}
							tag={chapter.tag}
							onClick={() =>
								this.activatePanel(activePanel === chapter)
							}
							{...chapter}
							activatePanel={this.activatePanel.bind(null, index)}
							activateNextPanel={this.activateNextPanel.bind(
								null,
								index + 1
							)}
						/>
					))}
				</StyledAccordion>
			</AnimateSharedLayout>
		);
	}
}
export default Accordion;
// Proptypes BaseAccordion
Accordion.propTypes = {
	children: PropTypes.any,
};


