import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StyledPanel, {StyledAccordion} from './StyledAccordion';
import {ChapterTags} from '../Tags';
import { SecondaryButton } from '../Button';
import { FiUsers, FiVideo, FiFileText, FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { colors, sizes, addAlpha } from '../../GlobalStyle.js';
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
			isOpen,
			onClick,
		} = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		return (
			<StyledPanel animate active={isActive}>
				<PanelHeader
					animate
					title={title}
					tag={tag}
					onClick={activateTab}
				>
					<motion.div>
						<ChapterTags animate>{tag}</ChapterTags>
						<motion.p
							animate
							style={{
								color:
									index === activeTab
										? colors.primary
										: colors.gray,
							}}
							className={`chapter-title ${
								index === activeTab && 'active'
							}`}
						>
							{title}
						</motion.p>
					</motion.div>
					<motion.div
						animate={{
							transition: index === activeTab ? 1 : 0,
							rotate: index === activeTab ? 45 : 0,
						}}
						className={`toggle-icon 
							${index === activeTab && 'open'}`}
					>
						<FiPlus />
					</motion.div>
				</PanelHeader>
				<AnimatePresence exitBeforeEnter initial={false}>
					{isActive && (
						<PanelContent animate key={activeTab} pages={pages}>
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
									onClick={activateNextTab}
								>
									{label}
								</SecondaryButton>
							</PanelFooter>
						</PanelContent>
					)}
				</AnimatePresence>

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
export const PanelHeader = ({ tag, title, children, onClick }) => {
	return (
		<motion.div animate onClick={onClick} className='panel-header'>
			{children}
		</motion.div>
	);
};

// Proptypes AccordionHeader
PanelHeader.propTypes = {
	tag: PropTypes.string,
	title: PropTypes.string,
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
	content: PropTypes.string,
	contentTitle: PropTypes.any,
};

export const PanelFooter = ({ children }) => {
	return <motion.div animate className='panel-footer'>{children}</motion.div>;
};

PanelFooter.propTypes = {
	children: PropTypes.any,
};


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
			<AnimateSharedLayout>
				<StyledAccordion
					animate
					className='accordion'
					transition={{ ease: 'easeOut' }}
					role='tablist'
				>
					{chapters.map((chapter, index) => (
						<Panel
							key={index}
							activeTab={activeTab}
							index={index}
							title={chapter.title}
							pages={chapter.pages}
							label={chapter.label}
							tag={chapter.tag}
							onClick={() =>
								this.activateTab(activeTab === chapter)
							}
							{...chapter}
							activateTab={this.activateTab.bind(null, index)}
							activateNextTab={this.activateNextTab.bind(
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


