import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, sizes } from '../../GlobalStyle';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';


class TabBar extends Component {
	// const { activeTab, setActiveTab } = useState(0);
	// console.log("hallo"+setPadding)

	// static defaultProps = {
	// 	scrolling: false,
	// };
	state = {
		activeTab: 0,
		scrolling: false,
	};

	componentDidMount() {
		// window.addEventListener('scroll', this.handleScroll(this.state), true);
		window.addEventListener('scroll', this.listenToScroll);
	}
	componentDidUpdate() {
		// window.removeEventListener('scroll', this.listenToScroll);
		window.addEventListener('scroll', this.listenToScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.listenToScroll);
	}
	// handleScroll() {
	// 	if (window.scrollY === 0 && this.state.scrolling === true) {
	// 		this.setState({ scrolling: false });
	// 	} else if (window.scrollY > 0 && this.state.scrolling === false) {
	// 		this.setState({ scrolling: true });
	// 	}
	// }
	listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolled = winScroll / height;

		if (scrolled <= 0.009 ) {
			this.setState({ scrolling: false });
		} else  {
			this.setState({ scrolling: true });
		}

		console.log(scrolled);
		// this.setState({
		// 	scrolling: scrolled,
		// });
	};
	render() {
		const { tabs, setPadding } = this.props;
		const { scrolling, activeTab } = this.state;
		return (
			<>
				<TabContainer padding={setPadding} scrolling={scrolling}>
					<AnimateSharedLayout>
						<TabButtonGroup>
							{tabs.map((tab, index) => (
								<TabButton
									
									key={index}
									active={activeTab === index}
									onClick={() =>
										this.setState({
											activeTab: index,
										})
									}
								>
									{tab.title}
								</TabButton>
							))}
						</TabButtonGroup>
					</AnimateSharedLayout>
				</TabContainer>
				{tabs[activeTab].render()}
			</>
		);
	}
}

TabBar.propTypes = {
	tabs: PropTypes.array,
	map: PropTypes.func
};

export default TabBar;

const TabContainer = styled.div`
	position: sticky;
	background-color: ${colors.light};
	width: 100%;
	top: ${(props) => (props.padding ? props.padding + 'px' : 0)};
	padding: 12px 0 12px;
	z-index: 2;
	padding-left: ${sizes.paddingLeft};
	padding-right: ${sizes.paddingRight};
	transition-duration: 0.1s;
	transition-timing-function: linear;
	box-shadow: ${(props) =>
		props.scrolling
			? '0px 1px 4px rgba(0, 0, 0, 0.25)'
			: '0px 1px 4px rgba(0, 0, 0, 0.0)'};
	/* :after {
		content: '';
		position: absolute;
		width: 100%;
		z-index: 0;
		height: 4px;
		display:flex;
		bottom:3px;
		padding:0 -16px;
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7);
	} */
`;

TabContainer.defaultProps = {
	scrolling: {},
};

const TabButtonGroup = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 40px;
	background-color: ${colors.grayLighter};
	border-radius: 5px;
	
	padding: 0 3px;
`;
const TabButton = styled(motion.button)`
	border: 0;
	border-radius: ${(state) => (state.active ? '5px' : '0')};
	color: ${colors.gray};
	width: 100%;
	height: auto;
	margin: 3px 0;
	align-items: center;
	position: relative;
	transition: 0.3s;
	padding: 0;
	overflow: auto;
	font-size: 12px;
	font-weight: ${(state) => (state.active ? '700' : '500')};
	box-shadow: ${(state) =>
		state.active ? '0px 1px 4px rgba(156, 156, 156, 0.25)' : ''};
	z-index: ${(state) => (state.active ? '1' : 'auto')};
	background: ${(state) => (state.active ? colors.light : colors.grayLighter)};
	&:focus {
		outline: none;
	}
`;
