import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export default function TabBar({ tabs }) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabContainer>
				{tabs.map((tab, index) => (
					<TabButton
						key={index}
						active={activeTab === index}
						onClick={() => setActiveTab(index)}
					>
						{tab.title}
					</TabButton>
				))}
			</TabContainer>
			{tabs[activeTab].render()}
		</>
	);
}


TabBar.propTypes = {
    tabs: PropTypes.array,
    map: PropTypes.func
};

const TabContainer = styled.section`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 40px;
	background-color: ${colors.grayLight};
	border-radius: 5px;
	margin: 10px 0 20px;
	padding: 0 3px;
`;
const TabButton = styled.button`
	border: 0;
	border-radius: ${(props) => (props.active ? '5px' : '0')};
	color: ${colors.grayDark};
	width: 100%;
	height: auto;
	margin: 3px 0;
	align-items: center;
	position: relative;
	transition: 0.3s;
	padding: 0;
	overflow: auto;
	font-size: 11px;
	font-weight: ${(props) => (props.active ? '700' : '500')};
	box-shadow: ${(props) =>
		props.active ? '1px 1px 4px rgba(0, 0, 0, 0.25)' : ''};
	z-index: ${(props) => (props.active ? '1' : 'auto')};
	background: ${(props) => (props.active ? colors.light : '#f2f2f2')};
	&:focus {
		outline: none;
	}
`;
